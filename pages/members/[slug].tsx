import React from 'react';
import type { PropsWithChildren } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { getAllMembers, getSingleMember } from '../../utils/mdx';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  Avatar,
  TwitterIcon,
  LinkdinIcon,
  GithubIcon
} from '../../components/';
import { members } from '../../utils/constants';
import MemberLayout from '../../layouts/Member';

const Member: NextPage = ({ frontmatter, slug, mdxSource }: any) => {
  const avatarData = members.find((member) => member.name === frontmatter.name);
  const hasSocials =
    frontmatter.github || frontmatter.linkedin || frontmatter.twitter;

  return (
    <MemberLayout member={{ frontmatter, slug, code: mdxSource }}>
      <MDXRemote
        {...mdxSource}
        components={{
          Avatar
        }}
      />
    </MemberLayout>
  );
};

export default Member;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const post = await getSingleMember(params?.slug);
//   return {
//     props: { post }
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllMembers().map(({ slug }) => ({ params: { slug } }));
//   return {
//     paths,
//     fallback: false
//   };
// };

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('data/members', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontmatter,
      slug,
      mdxSource
    }
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('data/members'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
};
