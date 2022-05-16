import { Avatar, TwitterIcon, LinkdinIcon, GithubIcon } from '../components';
import { MdxMemberPage } from '../types';
import type { PropsWithChildren } from 'react';
import { members } from '../utils/constants';

export default function MemberLayout({
  children,
  member: { frontmatter }
}: PropsWithChildren<{ member: MdxMemberPage }>) {
  const avatarData = members.find((member) => member.name === frontmatter.name);
  const hasSocials =
    frontmatter.github || frontmatter.linkedin || frontmatter.twitter;

  return (
    <section className="flex-1">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="mb-8 flex flex-col sm:mr-12 sm:mb-0">
            <Avatar img={avatarData?.img} size="lg" />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-monochromatic-700 dark:text-white">
              {frontmatter.name}
            </h1>

            {frontmatter.title && (
              <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
                {frontmatter.title}
              </p>
            )}

            {hasSocials && (
              <div className="mt-2 text-monochromatic-700 dark:text-white">
                <p className="text-base">Socials</p>
                <div className="mt-2 flex">
                  {frontmatter.github && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://github.com/${frontmatter.github}`}
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {frontmatter.linkedin && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://linkedin.com/in/${frontmatter.linkedin}`}
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
                    >
                      <LinkdinIcon />
                    </a>
                  )}
                  {frontmatter.twitter && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://twitter.com/${frontmatter.twitter}`}
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
      {/* <div className="container mx-auto px-6 py-10">
        <article className="flex-1 p-2 text-monochromatic-900 dark:text-white">
          <h1>{frontMatter.title}</h1>
          <MDXRemote
            {...mdxSource}
            components={{
              Button,
              Avatar
            }}
          />
        </article>
      </div> */}
    </section>
  );
}
