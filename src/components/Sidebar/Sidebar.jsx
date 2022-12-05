import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import "./Sidebar.scss";
import musicImg from "../../assets/music_logo.svg";
import { useState } from "react";
import { HiMusicNote } from "react-icons/hi";
import { CiMicrophoneOn, CiHeart } from "react-icons/ci";
import { MdOutlineRadio } from "react-icons/md";
import { BiGridAlt } from "react-icons/bi";

export default function Sidebar() {
  const [active, setIsActive] = useState(1);
  const items = [
    { index: 1, label: "musique", Icon: HiMusicNote },
    { index: 2, label: "podcats", Icon: CiMicrophoneOn },
    { index: 3, label: "radios", Icon: MdOutlineRadio },
    { index: 4, label: "parcourir", Icon: BiGridAlt },
    {
      index: 5,
      label: "favoris",
      Icon: CiHeart,
      children: [
        { label: "coups de coeur", path: "loved" },
        { label: "playlists", path: "playlists" },
        { label: "albums", path: "albums" },
        { label: "podcats", path: "podcats" },
      ],
    },
  ];
  return (
    <aside className="sidebar__container">
      <img className="sidebar__logo" src="src/assets/big_white_logo.svg"></img>
      <ul className="sidebar__content" role={"navigation"}>
        {items.map((item) => (
          <SidebarItem
            key={item.index}
            active={active === item.index}
            label={item.label}
            Icon={item.Icon}
            onClick={() => setIsActive(item.index)}
            children={item.children}
          ></SidebarItem>
        ))}
      </ul>
    </aside>
  );
}
