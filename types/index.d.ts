export type MdxMemberPage = {
  code: string;
  slug: string;
  frontmatter: {
    name: string;
    title: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
};

export type MdxBlogPage = {
  code: string;
  slug: string;
  readingTime?: string;
  frontmatter: {
    archived?: boolean;
    draft?: boolean;
    title: string;
    author: string;
    excerpt?: string;
    coverImage?: string;
    date: string;
  };
};

/**
 * This is a separate type from MdxBlogPage because the code string is often
 * pretty big and the pages that simply list the pages shouldn't include the code.
 */
export type MdxListBlogItem = Omit<MdxBlogPage, 'code'>;
