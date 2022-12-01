import Link from "next/link";
import React from "react";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu_container}>
        <div className={styles.col}>
          <a
            href="https://www.hs-harz.de/deutschlandstipendium/bewerber/"
            target="_blank">
            Bewerber/innen
          </a>
          <a href="https://www.hs-harz.de/medieninformatik" target="_blank">
            Infos zum Studiengang Medieninformatik (B.Sc.)
          </a>
          <a
            href="https://www.hs-harz.de/medien-und-spielekonzeption-ma"
            target="_blank">
            Infos zum Studiengang Medien- und Spielekonzeption (M.A.)
          </a>
          <a href="https://www.medieninformatik.de/rundgang/" target="_blank">
            Rundgang durch die Räumlichkeiten
          </a>
        </div>
        <div className={styles.col}>
          <a href="https://studip.hs-harz.de/studip/" target="_blank">
            StudIP
          </a>
          <a
            href="https://auskunft2.hs-harz.de/lsf/rds?state=user&type=1"
            target="_blank">
            LSF
          </a>
        </div>
        <div className={styles.col}>
          <a href="https://www.hs-harz.de/" target="_blank">
            ▲ Hochschule Harz
          </a>
          <a href="https://www.medieninformatik.de/impressum/" target="_blank">
            Impressum
          </a>
          <a
            href="https://www.medieninformatik.de/datenschutzerklaerung/"
            target="_blank">
            Datenschutzerklärung
          </a>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <span>
          © 2022 Medieninformatik • Ein Studiengang der ▲ Hochschule Harz •
          Powered by Wordpress • Some icons by Icons8
        </span>
        <div className={styles.socials}>
          <span>FA</span>
          <span>Twitter</span>
          <span>RSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
