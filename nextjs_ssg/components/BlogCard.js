import React from "react";
import styles from "../styles/BlogCard.module.css";
import stylesCat from "../styles/Category.module.css";
import Link from "next/link.js";
import { dateParser } from "./UtilFunctions";
import { getCategoryPicture } from "./CategoryFunction";

const BlogCard = ({post, categories}) => {

  //console.log(post.attributes.categories.data)
  //console.log(categories);

  const postCats = [];

  post.attributes.categories.data.forEach(p => {
    categories.forEach(e => {
      if(p.id === e.id){
        postCats.push(e);
        return;
      }
    })
  });

  console.log(postCats.length);

  postCats.forEach(a => {
    console.log(a.attributes.Bild.data.attributes.name);
  });

  console.log(postCats);





  const imageUrl =
    "url('http://194.95.193.79:1337" + post.attributes.Titelbild.data[0].attributes.url + "')";
  
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
        <div className={styles.postc}>
        {postCats.map((cat) => (
              <img src = {urlParser(cat.attributes.Bild.data.attributes.url)} title= {cat.attributes.Name}/>
          )
            )}
        </div>
      </div>
    </div>
  );
};

export function urlParser(url) {
  const imageUrl =
  "http://194.95.193.79:1337" + url + "";
  return imageUrl;
}

export default BlogCard;
