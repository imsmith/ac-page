import React from 'react';
import { Avatar, TwitterIcon, LinkdinIcon, GithubIcon } from '../components';
import { members } from '../utils/constants';
import cx from 'classnames';

type Props = {
  children: React.ReactNode;
  meta: {
    slug: string;
    title: string;
    author: string;
    authorTitle?: string;
    authorUrl?: string;
    authorImageUrl?: string;
    tags?: string[];
    publishedDate: string;
  };
};
const BloStructure: React.FC<Props> = ({ children, meta }) => {
  const avatarData = members.find((member) => member.name === meta.author);

  return (
    <section className="flex-1">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="mb-8 flex max-w-xs flex-col sm:mr-12 sm:mb-0">
            <Avatar img={meta.authorImageUrl ?? avatarData?.img} />

            <a
              href={meta.authorUrl ?? undefined}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1
                className={cx(
                  'mt-4 text-2xl font-semibold capitalize text-monochromatic-700 dark:text-white',
                  { 'underline hover:text-primary-400': meta.authorUrl }
                )}
              >
                {meta.author}
              </h1>
            </a>

            {meta.authorTitle && (
              <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
                {meta.authorTitle}
              </p>
            )}

            {meta.publishedDate && (
              <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
                Published: {meta.publishedDate}
              </p>
            )}

            {meta.tags && (
              <div className="mt-2 text-monochromatic-500 dark:text-monochromatic-400">
                <span className="text-monochromatic-600 dark:text-monochromatic-300">
                  Tags:{' '}
                </span>
                {meta.tags.map((tag) => (
                  <span className="mr-2 hover:text-primary-500" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <article className="max-w-2xl flex-1 p-2 text-monochromatic-900 dark:text-white">
            {children}
            <div className="mt-8">More posts...</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BloStructure;
