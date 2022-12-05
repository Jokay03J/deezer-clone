import React from "react";
import "./SidebarItem.scss";
import musicImg from "../../assets/music_logo.svg";
import { useState } from "react";
import { HiMusicNote } from "react-icons/hi";

export default function SidebarItem({
  label,
  Icon,
  active,
  onClick,
  children,
}) {
  return (
    <li
      className={`sidebaritem__content ${active ? "active" : ""} ${
        children ? "has-children" : ""
      }`}
      onClick={onClick}
    >
      <div className={`sidebaritem ${children ? "has-children" : ""}`}>
        <Icon
          className="sidebaritem__icon"
          fill={active ? "#EF5466" : "#FFFF"}
        ></Icon>
        <span className="sidebaritem__label">{label}</span>
      </div>
      {children ? (
        <ul className="sidebaritem__children">
          {children.map((item) => (
            <li className="sidebaritem__child" key={crypto.randomUUID()}>
              {item.label}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
