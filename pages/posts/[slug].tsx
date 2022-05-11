import React from 'react';
import type { NextPage } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../utils/mdx';
import { Avatar } from '../../components';
import BlogLayout from '../../layouts/Blog';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post
}) => {
  const Component = React.useMemo(
    () => getMDXComponent(post.code),
    [post.code]
  );

  return (
    <BlogLayout post={post}>
      <Component components={{ Avatar } as any} />
    </BlogLayout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getSinglePost(params?.slug);
  return {
    props: { post }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false
  };
};
