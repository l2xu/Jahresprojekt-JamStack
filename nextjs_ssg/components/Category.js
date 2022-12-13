import React from "react";
import Image from "next/image";
import styles from "../styles/Category.module.css";
import Link from "next/link.js";

const Category = () => {

    return (
        <div className={styles.flex}>

            <div>
                <div className={styles.categories_heading}>
                    <a href="#">Projekte<i className={styles.icon_projects}></i></a>
                </div>
                <div className={styles.categories}>
                    <img src="/world-wide-web 2.png" alt=""/>
                    <img src="/web-development.png"  alt=""/>
                    <img src="/bleistift-und-lineal 2.png" alt=""/>
                    <img src="/kamera.png" alt=""/>
                    <img src="/filmkamera.png" alt=""/>
                    <img src="/konsole 2.png" alt=""/>
                    <img src="/animation 3.png" alt=""/>
                </div>
            </div>
            <div>
                <div className={styles.categories_heading}>
                    <a href="#">Blog<i className={styles.icon_blog}></i></a>
                </div>
                <div className={styles.categories}>
                    <img src="/bleichen.png" alt=""/>
                    <img src="/wecker 2.png" alt=""/>
                    <img src="/buch 2.png" alt=""/>
                    <img src="/kommunikation.png" alt=""/>
                    <img src="/krawatte 2.png" alt=""/>
                    <img src="/puzzle 2.png" alt=""/>
                    <img src="/puzzle 2.png" alt=""/>
                </div>
            </div>

        </div>
    )
};

export default Category;