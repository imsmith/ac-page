import { Avatar, TwitterIcon, LinkdinIcon, GithubIcon } from '../components';
import { MdxMemberPage } from '../types';
import type { PropsWithChildren } from 'react';
import { members } from '../utils/constants';
import Link from 'next/link';
import { MdxListBlogItem } from '../types';

export default function MemberLayout({
  children,
  member: { frontmatter, posts }
}: PropsWithChildren<{ member: MdxMemberPage }>) {
  const avatarData = members.find((member) => member.name === frontmatter.name);
  const hasSocials =
    frontmatter.github || frontmatter.linkedin || frontmatter.twitter;

  return (
    <section className="flex-1">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="mb-8 flex max-w-xs flex-col sm:mr-12 sm:mb-0">
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
                      href={frontmatter.github}
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {frontmatter.linkedin && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={frontmatter.linkedin}
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
                    >
                      <LinkdinIcon />
                    </a>
                  )}
                  {frontmatter.twitter && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={frontmatter.twitter}
                      className="mr-2 text-monochromatic-500 hover:opacity-70 dark:text-monochromatic-300"
                    >
                      <TwitterIcon />
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 text-monochromatic-700 dark:text-white">
              <div className="text-lg font-medium">Blog Posts</div>
              {posts.map((post: MdxListBlogItem) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
                  <div className="cursor-pointer text-sm underline hover:text-primary-400">
                    {post.frontmatter.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <article className="prose-light prose max-w-2xl flex-1 p-2 text-monochromatic-700 dark:prose-dark dark:text-white">
            {children}
          </article>
        </div>
      </div>
    </section>
  );
}
