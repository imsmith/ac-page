import React from 'react';
import { members } from '../utils/constants';
import { CardWithDescription } from '../components';

const MemberHighlight: React.FC = () => {
  return (
    <section className="bg-white pb-10 dark:bg-monochromatic-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-monochromatic-800 dark:text-white lg:text-4xl">
          Member Highlight
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16">
          <CardWithDescription member={members[0]} />
          <CardWithDescription member={members[1]} />
        </div>

        <div className="pt-8 text-center capitalize text-monochromatic-800  dark:text-white">
          <a
            className="transform rounded-md bg-primary-600 px-4 py-2 text-base font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-500 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-opacity-80"
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
