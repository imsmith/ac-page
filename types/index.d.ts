import readingTime from 'reading-time';

type MdxPage = {
  code: string;
  slug: string;
  readTime?: ReturnType<typeof readingTime>;
  frontmatter: {
    archived?: boolean;
    draft?: boolean;
    title?: string;
    excerpt?: string;
    coverImage?: string;
    date?: string;
    meta?: {
      keywords?: Array<string>;
      [key as string]: string;
    };
  };
};

/**
 * This is a separate type from MdxPage because the code string is often
 * pretty big and the pages that simply list the pages shouldn't include the code.
 */
type MdxListItem = Omit<MdxPage, 'code'>;
