import React from "react";
import { useSelector } from "react-redux";
import SearchComponent from "../SearchComponent/SearchComponent";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Dashboard.scss";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.value);
  console.log(user);
  return (
    <div className="dashboard__container">
      <SearchComponent></SearchComponent>
      <div className="dashboard__channels">
        <DashboardHeader title={`bonjour, ${user.name}.`}></DashboardHeader>
        <DashboardTitle title={"mon flow."}></DashboardTitle>
      </div>
    </div>
  );
}
