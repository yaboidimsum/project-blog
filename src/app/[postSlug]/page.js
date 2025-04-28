import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helpers/file-helpers";
import CodeSnippet from "@/components/CodeSnippet";
import COMPONENT_MAP from "@/helpers/mdx-component";
import { notFound } from "next/navigation";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const blogpostData = await loadBlogPost(postSlug);

  if (!blogpostData) {
    return null;
  }

  const { frontmatter } = blogpostData;

  return {
    title: `${frontmatter.title}`,
    description: `${frontmatter.abstract}`,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const blogpostData = await loadBlogPost(postSlug);

  if (!blogpostData) {
    notFound();
  }

  const { frontmatter, content } = blogpostData;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        {/* <p>This is where the blog post will go!</p>
        <p>
          You will need to use <em>MDX</em> to render all of the elements
          created from the blog post in this spot.
        </p> */}
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
