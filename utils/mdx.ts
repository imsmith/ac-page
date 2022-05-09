import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import yaml from 'js-yaml';

export const POSTS_PATH = path.join(process.cwd(), 'data/posts');

export const getSourceOfFile = (fileName: string, options?: {}) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), options);
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');

      const { data } = matter(source, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

export const getSinglePost = async (slug: string | string[] | undefined) => {
  const source = getSourceOfFile(slug + '.mdx', {
    encoding: 'utf-8',
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
    cwd: POSTS_PATH,
    grayMatterOptions: (options) => {
      options.engines = {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      };
      return options;
    },
    // xdmOptions(options) {
    //   options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
    //   options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
    //   return options;
    // },
    esbuildOptions(options) {
      options.platform = 'node';
      options.target = ['es6'];
      return options;
    },
  });

  return {
    frontmatter,
    code,
    readingTime: readingTime(source.toString()).text,
  };
};
