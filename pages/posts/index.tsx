import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { formatDate } from '../../utils/misc';
import { getAllPosts } from '../../utils/mdx';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  return (
    <section className="bg-white dark:bg-monochromatic-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold capitalize text-monochromatic-800 dark:text-white lg:text-4xl">
          <span className="text-monochromatic-500 dark:text-monochromatic-200">
            Blog
          </span>
        </h1>

        <div className="my-6 text-monochromatic-500 dark:text-monochromatic-300">
          {posts.map((post: any) => (
            <div key={post.slug} className="mt-14">
              <p className="text-xs">{formatDate(post.frontmatter.date)}</p>
              <Link href={`/posts/${post.slug}`} passHref>
                <p className="cursor-pointer text-xl font-bold hover:text-primary-400">
                  {post.frontmatter.title}
                </p>
              </Link>
              {post.frontmatter.excerpt && (
                <p className="mt-2 text-sm">{post.frontmatter.excerpt}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4"></div>
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
