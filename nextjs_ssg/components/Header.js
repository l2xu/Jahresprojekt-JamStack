import React from "react";
import s from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="/mi-logo.svg"  />
      <div className={s.searchbox}>
        <span className={s.hs}>Ein Studiengang der ▲ Hochschule Harz</span>
        <input placeholder="Suchen"></input>
      </div>
    </header>
  );
};

export default Header;
