import React from "react";
import styles from "../styles/BlogCard.module.css";
import Link from "next/link.js";
import { dateParser } from "./UtilFunctions";

const BlogCard = ({ post }) => {
  const imageUrl =
    "url('http://194.95.193.79:1337" +
    post.attributes.Titelbild.data[0].attributes.url +
    "')";

  return (
    <div
      className={styles.posts}
      style={{
        backgroundImage: imageUrl,
        backgroundSize: "cover",
      }}>
      <div className={styles.bottomContainer}>
        <h3>{post.attributes.title.substring(0, 25) + "..."}</h3>
        <span className={styles.card_date}>
          {dateParser(post.attributes.publishedAt)} | Prof. Martin Kreyßig
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
