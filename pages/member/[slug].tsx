import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { getAllMembers, getSingleMember } from '../../utils/mdx';
import { Avatar } from '../../components';
import MemberLayout from '../../layouts/member';
import { getMDXComponent } from 'mdx-bundler/client';

const Member: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  member
}: any) => {
  const Component = React.useMemo(
    () => getMDXComponent(member.code),
    [member.code]
  );

  return (
    <MemberLayout member={member}>
      <Component components={{ Avatar } as any} />
    </MemberLayout>
  );
};

export default Member;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const member = await getSingleMember(params?.slug);
  return {
    props: { member }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMembers().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false
  };
};
