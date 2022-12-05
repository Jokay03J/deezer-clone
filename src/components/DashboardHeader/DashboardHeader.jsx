import React from "react";
import "./DashboardHeader.scss";

export default function DashboardHeader({ title }) {
  return <h1 className="dashboard__header">{title}</h1>;
}
