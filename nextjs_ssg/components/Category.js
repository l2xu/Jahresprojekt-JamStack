import React from "react";
import Image from "next/image";
import styles from "../styles/Category.module.css";
import Link from "next/link.js";

const Category = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.categories_heading}>
          <a href="#">
            Projekte<i className={styles.icon_projects}></i>
          </a>
        </div>
        <div className={styles.categories}>
          <img src="/category_icons/world-wide-web 2.png" alt="" />
          <img src="/category_icons/web-development.png" alt="" />
          <img src="/category_icons/bleistift-und-lineal 2.png" alt="" />
          <img src="/category_icons/kamera.png" alt="" />
          <img src="/category_icons/filmkamera.png" alt="" />
          <img src="/category_icons/konsole 2.png" alt="" />
          <img src="/category_icons/animation 3.png" alt="" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.categories_heading}>
          <a href="#">
            Blog<i className={styles.icon_blog}></i>
          </a>
        </div>
        <div className={styles.categories}>
          <img src="/category_icons/bleichen.png" alt="" />
          <img src="/category_icons/wecker 2.png" alt="" />
          <img src="/category_icons/buch 2.png" alt="" />
          <img src="/category_icons/kommunikation.png" alt="" />
          <img src="/category_icons/krawatte 2.png" alt="" />
          <img src="/category_icons/puzzle 2.png" alt="" />
          <img src="/category_icons/puzzle 2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
