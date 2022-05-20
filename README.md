# Architecture Council

[Site](https://ac-page.vercel.app/)

# Contributing

The majority of content for this site is built using markdown. All blog posts and all member pages are static files within the `data` directory and within their respective directories inside of `data`.

### Frontmatter

A special note about the markdown files is the frontmatter. Frontmatter is a yaml like block that proceeds the file which gives "meta" information when building the page.

### MDX

[MDX](https://mdxjs.com/) is an extension of markdown with support for components. As this is an extension you can write simple markdown and it will work as expected. If you want to add functionality and components to enrich your page or post you can import React components to your page and call them to embed them into your page. You can see a simple example at the bottom of the `/data/blog/all-the-things.mdx` file, under a heading called "Custom Components"

### Members

To add or remove members simple delete the file for said person, to edit the content on a members page, update the markdown file. For an example of frontmatter for members, view `/data/members/Michael-Wiley.mdx` file.

### Blog

To add or remove blog posts simple delete the file for said blog, or edit the content to update a blog post. For an example of frontmatter for a blog post as well as react components, view `/data/blog/all-the-things.mdx` file.

---

Submit a merge request to get your updates into the repo and kick off a new build which will then deploy the changes automagically.

If you have any questions please reach out!
