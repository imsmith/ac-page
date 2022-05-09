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
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex flex-col sm:mr-12 sm:mb-0 mb-8 max-w-xs">
            <Avatar img={meta.authorImageUrl ?? avatarData?.img} />

            <a
              href={meta.authorUrl ?? undefined}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1
                className={cx(
                  'mt-4 text-2xl font-semibold text-slate-700 capitalize dark:text-white',
                  { 'underline hover:text-primary-400': meta.authorUrl }
                )}
              >
                {meta.author}
              </h1>
            </a>

            {meta.authorTitle && (
              <p className="mt-2 text-slate-500 capitalize dark:text-slate-300">
                {meta.authorTitle}
              </p>
            )}

            {meta.publishedDate && (
              <p className="mt-2 text-slate-500 capitalize dark:text-slate-300">
                Published: {meta.publishedDate}
              </p>
            )}

            {meta.tags && (
              <div className="text-slate-500 dark:text-slate-400 mt-2">
                <span className="text-slate-600 dark:text-slate-300">
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
          <article className="flex-1 text-slate-900 dark:text-white p-2 max-w-2xl">
            {children}
            <div className="mt-8">More posts...</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BloStructure;
