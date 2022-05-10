import React from 'react';
import type { NextPage } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../utils/mdx';
import { Avatar } from '../../components';
import { formatDate } from '../../utils/misc';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';

type Props = {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
  readingTime: string;
};
const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  code,
  frontmatter,
  ...rest
}) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mx-auto my-16 w-full max-w-7xl px-8 text-slate-700 dark:text-white">
      <h1 className="text-3xl">{frontmatter.title}</h1>
      <h1>{formatDate(frontmatter.date)}</h1>
      <h1>{frontmatter.excerpt}</h1>
      <small>Reading Time: {rest.readingTime}</small>
      <article className="prose-light dark:prose-dark prose text-slate-700 dark:text-white">
        <Component components={{ Avatar } as any} />
      </article>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getSinglePost(params?.slug);
  return {
    props: { ...post }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false
  };
};
