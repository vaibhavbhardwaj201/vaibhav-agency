import React from "react";

import styles from './blogpostid.module.css'

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load Blog");
  }
  return res.json();
};

const BlogPost = async ({ params }) => {
  const { id } = params;

  const data = await getData(id);

  return (
    <div className={styles}>

    </div>
  )
};

export default BlogPost;
