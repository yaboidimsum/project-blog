import React from "react";

import { getBlogPostList } from "@/helpers/file-helpers";

import BlogSummaryCard from "@/components/BlogSummaryCard";


import styles from "./homepage.module.css";

async function Home() {
  const blogPost = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}

      {blogPost.map(({ slug, ...delegated }) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
