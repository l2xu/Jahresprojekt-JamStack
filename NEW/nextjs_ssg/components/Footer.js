import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3 gap-8">
        <div className=" flex flex-col gap-4">
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://www.hs-harz.de/deutschlandstipendium/bewerber/"
            target="_blank"
            rel="noreferrer">
            Bewerber/innen
          </a>
          <a
            cl
            className="border-t-2 border-gray-400 pt-2"
            href="https://www.hs-harz.de/medieninformatik"
            target="_blank"
            rel="noreferrer">
            Infos zum Studiengang Medieninformatik (B.Sc.)
          </a>
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://www.hs-harz.de/medien-und-spielekonzeption-ma"
            target="_blank"
            rel="noreferrer">
            Infos zum Studiengang Medien- und Spielekonzeption (M.A.)
          </a>
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://www.medieninformatik.de/rundgang/"
            target="_blank"
            rel="noreferrer">
            Rundgang durch die Räumlichkeiten
          </a>
        </div>
        <div className=" flex flex-col gap-4">
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://studip.hs-harz.de/studip/"
            target="_blank"
            rel="noreferrer">
            StudIP
          </a>
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://auskunft2.hs-harz.de/lsf/rds?state=user&type=1"
            target="_blank"
            rel="noreferrer">
            LSF
          </a>
        </div>
        <div className=" flex flex-col gap-4">
          <a
            href="https://www.hs-harz.de/"
            target="_blank"
            rel="noreferrer"
            className="border-t-2 border-gray-400 pt-2">
            ▲ Hochschule Harz
          </a>
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://www.medieninformatik.de/impressum/"
            target="_blank"
            rel="noreferrer">
            Impressum
          </a>
          <a
            className="border-t-2 border-gray-400 pt-2"
            href="https://www.medieninformatik.de/datenschutzerklaerung/"
            target="_blank"
            rel="noreferrer">
            Datenschutzerklärung
          </a>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <span className="text-xs">
          © 2022 Medieninformatik • Ein Studiengang der ▲ Hochschule Harz •
          Powered by Wordpress • Some icons by Icons8
        </span>
        <div className="flex gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100057687128334"
            target="_blank"
            rel="noreferrer">
            <Image src="/icons/fa.png" width="40" height="40" />
          </a>
          <a
            href="https://twitter.com/MIHSHARZ"
            target="_blank"
            rel="noreferrer">
            <Image src="/icons/twitter.png"  width="40" height="40" />
          </a>
          <a
            href="https://www.medieninformatik.de/feed/"
            target="_blank"
            rel="noreferrer">
            <Image src="/icons/rss.png"  width="40" height="40" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
