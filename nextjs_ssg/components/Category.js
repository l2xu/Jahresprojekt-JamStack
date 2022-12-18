import React from "react";
import Image from "next/image";
import styles from "../styles/Category.module.css";
import Link from "next/link.js";

const Category = ({categories}) => {

  //console.log(categories);

  const blogs = [];
  const projects = [];

categories.forEach(function(each){
  if (each.attributes.blog === true) {
    blogs.push(each);
    return;
  }else{
    projects.push(each);
    return;
  }
});

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.categories_heading}>
          <a href="#">
            Projekte<i className={styles.icon_projects}></i>
          </a>
        </div>
        <div className={styles.categories}>
          {projects.map((cat) => (
              <h3 key={cat.id}>
              <img src = {dateParser(cat.attributes.Bild.data.attributes.url)} title = {cat.attributes.Name}/>
            </h3> 
          )
            )}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.categories_heading}>
          <a href="#">
            Blog<i className={styles.icon_blog}></i>
          </a>
        </div>
        <div className={styles.categories}>
        {blogs.map((cat) => (
              <h3 key={cat.id}>
              <img src = {dateParser(cat.attributes.Bild.data.attributes.url)} title = {cat.attributes.Name}/>
            </h3> 
          )
            )}
        </div>
      </div>
    </div>

  );
};

export function dateParser(url) {
  const imageUrl =
  "http://194.95.193.79:1337" + url + "";
  return imageUrl;
}

export default Category;
