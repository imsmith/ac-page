import React from 'react';
import { Avatar, TwitterIcon, LinkdinIcon, GithubIcon } from '../components';
import { members } from '../utils/constants';

type Props = {
  children: React.ReactNode;
  meta: {
    name: string;
    title?: string;
    socials?: { twitter?: string; github?: string; linkedin?: string };
  };
};

const MemberStructure: React.FC<Props> = ({ children, meta }) => {
  const avatarData = members.find((member) => member.name === meta.name);

  return (
    <section className="flex-1">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex flex-col sm:mr-12 sm:mb-0 mb-8">
            <Avatar img={avatarData?.img} />

            <h1 className="mt-4 text-2xl font-semibold text-slate-700 capitalize dark:text-white">
              {meta.name}
            </h1>

            {meta.title && (
              <p className="mt-2 text-slate-500 capitalize dark:text-slate-300">
                {meta.title}
              </p>
            )}

            {meta.socials && (
              <div className="text-slate-700 dark:text-white mt-2">
                <p className="text-base">Socials</p>
                <div className="flex mt-2">
                  {(meta.socials.github ||
                    meta.socials.github?.length === 0) && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://github.com/${meta.socials.github}`}
                      className="hover:opacity-70 mr-2 text-slate-500 dark:text-slate-300"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {(meta.socials.linkedin ||
                    meta.socials.linkedin?.length === 0) && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://linkedin.com/in/${meta.socials.linkedin}`}
                      className="hover:opacity-70 mr-2 text-slate-500 dark:text-slate-300"
                    >
                      <LinkdinIcon />
                    </a>
                  )}
                  {(meta.socials.twitter ||
                    meta.socials.twitter?.length === 0) && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://twitter.com/${meta.socials.twitter}`}
                      className="hover:opacity-70 mr-2 text-slate-500 dark:text-slate-300"
                    >
                      <TwitterIcon />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          <article className="flex-1 text-slate-900 dark:text-white p-2 max-w-2xl">
            {children}
          </article>
        </div>
      </div>
    </section>
  );
};

export default MemberStructure;
