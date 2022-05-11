import React from 'react';
import type { NextPage } from 'next';

const Member: NextPage = () => {
  return (
    <section className="flex-1">
      <div className="container mx-auto px-6 py-10">
        <article className="flex-1 p-2 text-monochromatic-900 dark:text-white">
          <h1 className="mt-4 text-2xl font-semibold capitalize text-monochromatic-700 dark:text-white">
            Member not found
          </h1>
          <div className="mt-4">
            <a
              href={`/members`}
              className="text-primary-600 hover:underline dark:text-primary-400"
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
