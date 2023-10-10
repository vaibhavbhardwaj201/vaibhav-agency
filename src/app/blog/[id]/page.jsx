import React from "react";
import Image from "next/image";

import styles from "./blogpostid.module.css";
import { NextResponse } from "next/server";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({
      message: 'Error'
    })
  }
  return res.json();
};

export async function generateMetadata({params}) {
  
  const post = await getData(params.id)
  return {
    title: `${post.title} | ${post.username}`,
    description: post.description,
  }

}

const BlogPost = async ({ params }) => {
  
  const { id } = params;
  const data = await getData(id);

  return <div className={styles.container}>
            <div className={styles.upperContainer}>
              <div className={styles.textContainer}>
                <h1 className={styles.heading}>{data.title}</h1>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.user}>
                  <Image
                    src={data.image}
                    alt="Avatar"
                    width={24}
                    height={24}
                    className={styles.avatar} />
                  <span className={styles.username}>{data.username}</span>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={data.image}
                  alt="Blog Image"
                  fill={true}
                  className={styles.image} />
              </div>
            </div>
            <div className={styles.lowerContainer}>
              {data.content}  
            </div>
         </div>;
};

export default BlogPost;
