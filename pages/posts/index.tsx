import React from 'react';
import { Card } from '../../components';
import type { NextPage } from 'next';
import Link from 'next/link';

import { getAllPosts } from '../../utils/mdx';

const Blog: NextPage = ({ posts }) => {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-slate-800 capitalize lg:text-4xl dark:text-white">
          <span className="text-primary-500 dark:text-slate-200">
            Latest Posts
          </span>
        </h1>

        <div className="max-w-2xl mx-auto my-6 text-slate-500 dark:text-slate-300">
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
              <p className="hover:text-primary-400 cursor-pointer">
                {post.frontmatter.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"></div>
      </div>
    </section>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
