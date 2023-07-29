import React from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "./blog.module.css"

export const metadata = {
  title: 'VebShen\'s Blogs',
  description: 'Blogs you can search on',
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load Blog");
  }
  return res.json();
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <Link href={`/blog/${item._id}`} className={styles.itemContainer} key={item._id}>
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt="Blog Image"
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.heading}>{item.title}</h1>
              <p className={styles.description}>
                {item.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
