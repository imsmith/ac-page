import React from 'react';
import type { NextPage } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../utils/mdx';
import { Avatar } from '../../components';
import { formatDate } from '../../utils/misc';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';

const Paragraph: React.FC<any> = (props) => {
  if (typeof props.children !== 'string' && props.children.type === 'img') {
    return <>{props.children}</>;
  }

  return <p {...props} />;
};

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
  // console.log({ code, frontmatter, rest });
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="dark:text-white text-slate-700 mt-16 mx-auto max-w-7xl">
      <h1 className="text-3xl">{frontmatter.title}</h1>
      <h1>{formatDate(frontmatter.date)}</h1>
      <h1>{frontmatter.excerpt}</h1>
      <small>Reading Time: {rest.readingTime}</small>
      <article className="dark:text-white text-slate-700 prose dark:prose-dark">
        <Component components={{ Avatar, p: Paragraph }} />
      </article>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getSinglePost(params?.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
