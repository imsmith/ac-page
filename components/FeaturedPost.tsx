import React from 'react';
import Link from 'next/link';
import { formatDate } from '../utils/misc';
import { MdxBlogPage } from '../types';

type Props = { post: MdxBlogPage };
const FeaturedPost: React.FC<Props> = ({ post }) => {
  if (!post) return null;
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <div className="group my-8 flex min-h-[360px] transform cursor-pointer flex-col rounded-lg bg-white shadow-lg transition duration-200 hover:scale-105 dark:bg-monochromatic-800 sm:flex-row">
        <div
          className="min-h-[192px] flex-1 overflow-hidden rounded-t-lg bg-cover bg-center bg-no-repeat sm:rounded-l-lg sm:rounded-tr-none"
          style={{
            backgroundImage: `url('${post.frontmatter.coverImage}')`
          }}
        />
        <div className="flex w-full flex-col justify-between p-6 sm:w-1/2 lg:w-1/3">
          <div className="flex flex-col overflow-hidden">
            <p className="text-xs">{formatDate(post.frontmatter.date)}</p>
            <p className="text-3xl font-bold group-hover:text-primary-400">
              {post.frontmatter.title}
            </p>
            {post.frontmatter.excerpt && (
              <p className="mt-2 overflow-hidden text-ellipsis text-sm">
                {post.frontmatter.excerpt}
              </p>
            )}
          </div>
          <div className="mt-2 flex flex-wrap">
            {post.frontmatter?.tags?.map((tag: string) => (
              <span key={tag} className="pill dark:pill-dark mr-2 mt-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
