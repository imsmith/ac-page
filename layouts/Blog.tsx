import { Image } from '../components';
import { formatDate } from '../utils/misc';
import { MdxPage } from '../types';
import avatar from '../public/image/headshot1.jpeg';
import type { PropsWithChildren } from 'react';

export default function BlogLayout({
  children,
  post: { frontmatter, readingTime }
}: PropsWithChildren<{ post: MdxPage }>) {
  return (
    <article className="mx-auto my-8 flex w-full max-w-2xl flex-col items-start justify-center px-8 text-monochromatic-700 dark:text-white md:my-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl ">
        {frontmatter.title}
      </h1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            className="rounded-full"
            alt="avatar"
            height={24}
            width={24}
            src={avatar}
          />
          <p className="ml-2 text-sm text-monochromatic-700 dark:text-monochromatic-300">
            {frontmatter.author} / {formatDate(frontmatter.date)}
          </p>
        </div>
        <p className="min-w-32 mt-2 text-sm text-monochromatic-700 dark:text-monochromatic-300 md:mt-0">
          {readingTime}
        </p>
      </div>
      {frontmatter.coverImage && (
        <div className="mt-4 md:mt-8">
          <Image
            alt="coverImage"
            src={frontmatter.coverImage}
            width={1740}
            height={1160}
          />
        </div>
      )}
      <div className="prose-light prose w-full max-w-none text-monochromatic-700 dark:prose-dark dark:text-white">
        {children}
      </div>
    </article>
  );
}
