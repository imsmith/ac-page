import React from 'react';
import { members } from '../../utils/constants';
import { Card } from '../../components';
import type { NextPage } from 'next';

const Members: NextPage = () => {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-slate-800 capitalize lg:text-4xl dark:text-white">
          <span className="text-primary-500 dark:text-slate-200">
            Council Members
          </span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-slate-500 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
