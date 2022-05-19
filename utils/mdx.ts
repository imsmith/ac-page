import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import yaml from 'js-yaml';
import { MdxListBlogItem } from '../types';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export const BLOG_PATH = path.join(process.cwd(), 'data/blog');
export const MEMBERS_PATH = path.join(process.cwd(), 'data/members');

export const getSourceOfFile = (
  dirPath: string,
  fileName: string,
  options?: {}
) => {
  return fs.readFileSync(path.join(dirPath, fileName), options);
};

const sortPostsByDate = (posts: MdxListBlogItem[]) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  });
};

export const getAllPosts = () => {
  const posts = fs
    .readdirSync(BLOG_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(BLOG_PATH, fileName);
      const slug = fileName.replace(/\.mdx?$/, '');

      const { data } = matter(source, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
        }
      });

      return {
        frontmatter: data,
        slug: slug,
        readingTime: readingTime(source.toString()).text
      };
    });

  return sortPostsByDate(posts as any);
};

export const getSinglePost = async (slug: string | string[] | undefined) => {
  const source = getSourceOfFile(BLOG_PATH, slug + '.mdx', {
    encoding: 'utf-8'
  });

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source: source.toString(),
    cwd: BLOG_PATH,
    grayMatterOptions: (options) => {
      options.engines = {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
      };
      return options;
    },
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ] as any;
      return options;
    },
    esbuildOptions(options) {
      options.platform = 'node';
      options.target = ['es6'];
      return options;
    }
  });

  return {
    frontmatter,
    code,
    readingTime: readingTime(source.toString()).text
  };
};

export const getAllMembers = () => {
  const members = fs
    .readdirSync(MEMBERS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(MEMBERS_PATH, fileName);
      const slug = fileName.replace(/\.mdx?$/, '');

      const { data } = matter(source, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
        }
      });

      return {
        frontmatter: data,
        slug: slug
      };
    });
  return members;
};

export const getSingleMember = async (slug: string | string[] | undefined) => {
  const source = getSourceOfFile(MEMBERS_PATH, slug + '.mdx', {
    encoding: 'utf-8'
  });

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source: source.toString(),
    cwd: BLOG_PATH,
    grayMatterOptions: (options) => {
      options.engines = {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
      };
      return options;
    },
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ] as any;
      return options;
    },
    esbuildOptions(options) {
      options.platform = 'node';
      options.target = ['es6'];
      return options;
    }
  });

  const posts = getAllPosts().filter(
    (post) => post.frontmatter.author === frontmatter.name
  );

  return {
    frontmatter,
    code,
    readingTime: readingTime(source.toString()).text,
    posts
  };
};
