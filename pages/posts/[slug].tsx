import React from 'react';
import type { NextPage } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../utils/mdx';
import { Avatar, Heading } from '../../components';

const Post: NextPage = ({ code, frontmatter, ...rest }: any) => {
  // console.log({ code, frontmatter, rest });
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className="dark:text-white text-slate-700 mt-16 mx-auto max-w-2xl">
      <h1 className="text-3xl">{frontmatter.title}</h1>
      <h1>{frontmatter.publishedAt}</h1>
      <h1>{frontmatter.excerpt}</h1>
      <small>Reading Time: {rest.readingTime}</small>
      <Component components={{ Avatar, h1: Heading }} />
    </article>
  );
};

export default Post;

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
