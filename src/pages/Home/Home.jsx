import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { login } from "../../slice/auth";

export default function Home() {
  const user = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  function handleClick() {
    // window.location.href = `https://connect.deezer.com/oauth/auth.php?app_id=${
    //   import.meta.env.VITE_DEEZER_APP_ID
    // }&redirect_uri=http://localhost:5173/oauth/callback&perms=basic_access,email,offline_access,manage_library,manage_community,delete_library,listening_history&response_type=token`;
    dispatch(
      login({
        name: "<votre nom>",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/user/500da708ab167bcef1a4751714ba2df6/56x56-000000-80-0-0.jpg",
      })
    );
  }
  return (
    <div className="home__container">
      <Sidebar></Sidebar>
      {!user ? (
        <button onClick={handleClick}>connection</button>
      ) : (
        <Dashboard></Dashboard>
      )}
    </div>
  );
}
