import React from "react";
const Header = () => {
  return (
    <header className="flex justify-between items-center mt-6 mb-8">
      <img  src="/mi-logo.svg" width={200}  />
      <div className="flex flex-col gap-3">
        <span className="text-xs" >Ein Studiengang der ▲ Hochschule Harz</span>
        <input placeholder="Suchen"></input>
      </div>
    </header>
  );
};

export default Header;
