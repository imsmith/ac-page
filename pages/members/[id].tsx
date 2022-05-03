import React from 'react';
import { members } from '../../utils/constants';
import { Avatar, TwitterIcon, LinkdinIcon, GithubIcon } from '../../components';
import type { NextPage } from 'next';

const Member: NextPage = () => {
  return (
    <section className="flex-1">
      <div className="container px-6 py-10 mx-auto">
        <article className="flex-1 text-slate-900 dark:text-white p-2">
          <h1 className="mt-4 text-2xl font-semibold text-slate-700 capitalize dark:text-white">
            Member not found
          </h1>
          <div className="mt-4">
            <a
              href={`/members`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Find Members
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Member;
