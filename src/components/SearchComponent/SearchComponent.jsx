import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { GoBell } from "react-icons/go";
import "./SearchComponent.scss";

export default function SearchComponent() {
  const user = useSelector((state) => state.auth.value);
  console.log(user);
  return (
    <div className="searchcomponent__container">
      <div className="searchcomponent__toolbar">
        <CiSearch className="searchcomponent__icon"></CiSearch>
        <input placeholder="Rechercher" type={"text"}></input>
      </div>
      <div className="searchcomponent__account">
        <GoBell className="searchcomponent__icon"></GoBell>
        <div className="searchcomponent__avatar">
          <img src={user.picture_small}></img>
        </div>
      </div>
    </div>
  );
}
