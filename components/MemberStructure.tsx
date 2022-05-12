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
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="mb-8 flex flex-col sm:mr-12 sm:mb-0">
            <Avatar img={avatarData?.img} size="lg" />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-monochromatic-700 dark:text-white">
              {meta.name}
            </h1>

            {meta.title && (
              <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
                {meta.title}
              </p>
            )}

            {meta.socials && (
              <div className="mt-2 text-monochromatic-700 dark:text-white">
                <p className="text-base">Socials</p>
                <div className="mt-2 flex">
                  {(meta.socials.github ||
                    meta.socials.github?.length === 0) && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://github.com/${meta.socials.github}`}
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
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
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
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
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
                    >
                      <TwitterIcon />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          <article className="max-w-2xl flex-1 p-2 text-monochromatic-900 dark:text-white">
            {children}
          </article>
        </div>
      </div>
    </section>
  );
};

export default MemberStructure;
