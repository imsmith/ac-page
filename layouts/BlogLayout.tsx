import { Image, Avatar } from '../components';
import { formatDate } from '../utils/misc';
import { MdxBlogPage } from '../types';
import type { PropsWithChildren } from 'react';
import { members } from '../utils/constants';
import Link from 'next/link';

export default function BlogLayout({
  children,
  post: { frontmatter, readingTime }
}: PropsWithChildren<{ post: MdxBlogPage }>) {
  const avatarData = members.find(
    (member) => member.name === frontmatter.author
  );

  return (
    <article className="mx-auto my-8 flex w-full max-w-2xl flex-col items-start justify-center px-8 text-monochromatic-700 dark:text-white md:my-16">
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl ">
        {frontmatter.title}
      </h1>
      <p className="text-sm text-monochromatic-700 dark:text-monochromatic-300">
        {formatDate(frontmatter.date)} - {readingTime}
      </p>
      {frontmatter.coverImage && (
        <div className="imageContainer mt-2 md:mt-4">
          <Image
            alt="coverImage"
            src={frontmatter.coverImage}
            layout="fill"
            className="image"
          />
        </div>
      )}
      <div className="prose-light prose w-full max-w-none text-monochromatic-700 dark:prose-dark dark:text-white">
        {children}
      </div>
      {frontmatter.tags?.length && (
        <div className="mt-4 flex flex-wrap">
          <span className="mr-2 mt-1 text-sm">Tags: </span>
          {frontmatter.tags?.map((tag: string) => (
            <span key={tag} className="pill dark:pill-dark mr-2 mt-1">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex w-full border-t-[1px] border-monochromatic-300 pt-4 dark:border-monochromatic-700">
        <Avatar img={avatarData?.img} />
        <div className="ml-4 flex flex-1 flex-col justify-center">
          <p className="mb-2 text-base font-semibold">
            Written by {frontmatter.author}
          </p>
          <p className="text-sm text-monochromatic-700 dark:text-monochromatic-300">
            <Link href={`/member/`} passHref>
              <span className="cursor-pointer hover:text-primary-400">
                {`Learn more about ${frontmatter.author.split(' ')[0]} →`}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
