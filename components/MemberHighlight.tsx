import React from 'react';
import { members } from '../utils/constants';
import { CardWithDescription } from '../components';

const MemberHighlight: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-900 pb-10">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-slate-800 capitalize lg:text-4xl dark:text-white">
          Member Highlight
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2">
          <CardWithDescription member={members[0]} />
          <CardWithDescription member={members[1]} />
        </div>

        <div className="pt-8 text-center text-slate-800 capitalize  dark:text-white">
          <a
            className="px-4 py-2 text-base font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-600 rounded-md hover:bg-primary-500 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-opacity-80"
            href={'/members'}
          >
            View all members
          </a>
        </div>
      </div>
    </section>
  );
};

export default MemberHighlight;
