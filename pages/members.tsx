import React from 'react';
import { Card } from '../components';
import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllMembers } from '../utils/mdx';
import { MdxListMemberItem } from '../types';

const Members: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  members
}) => {
  return (
    <section className="bg-monochromatic-100 dark:bg-monochromatic-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-monochromatic-800 dark:text-white lg:text-4xl">
          <span className="text-monochromatic-500 dark:text-monochromatic-200">
            Council Members
          </span>
        </h1>

        <p className="mx-auto my-6 max-w-2xl text-center text-monochromatic-500 dark:text-monochromatic-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {members.map((member: MdxListMemberItem) => (
            <Card key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;

export const getStaticProps: GetStaticProps = async () => {
  const members = getAllMembers();

  return {
    props: { members: members.sort((a, b) => (a.slug > b.slug ? 1 : -1)) }
  };
};
