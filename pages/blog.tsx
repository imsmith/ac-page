import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { formatDate } from '../utils/misc';
import { getAllPosts } from '../utils/mdx';
import { FeaturedPost } from 'components';
import { MdxBlogPage } from '../types';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  return (
    <section className="bg-monochromatic-100 dark:bg-monochromatic-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold capitalize text-monochromatic-800 dark:text-white lg:text-4xl">
          <span className="text-monochromatic-500 dark:text-monochromatic-200">
            Blog
          </span>
        </h1>

        <FeaturedPost post={posts[0]} />
        <div className="mt-20 mb-10 grid gap-4 text-monochromatic-500 dark:text-monochromatic-300 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {posts
            .filter((p: MdxBlogPage, i: number) => i !== 0)
            .map((post: MdxBlogPage) => (
              <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
                <div className="group flex transform cursor-pointer flex-col rounded-lg bg-white shadow-lg transition duration-200 hover:scale-105 dark:bg-monochromatic-800">
                  <div
                    className="relative h-56 w-full overflow-hidden rounded-t-lg bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${post.frontmatter.coverImage}')`
                    }}
                  />
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div className="flex flex-col overflow-hidden">
                      <p className="text-xs">
                        {formatDate(post.frontmatter.date)}
                      </p>
                      <p className="flex text-xl font-bold group-hover:text-primary-400">
                        {post.frontmatter.title}
                      </p>
                      {post.frontmatter.excerpt && (
                        <p className="mt-2 text-sm">
                          {post.frontmatter.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap">
                      {post.frontmatter?.tags?.map((tag: string) => (
                        <span
                          key={tag}
                          className="pill dark:pill-dark mr-2 mt-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts }
  };
};
