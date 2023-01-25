import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navigation } from "../nav";

const Sidebar = () => {

  const location = useLocation();

  const currentTab = (path: string) => {
    let locPath = location.pathname.split("/");
    let currentPath = path.split("/");
    if (location.pathname === path || locPath[1] === currentPath[1]) {
      return { background: "#fcd43b", color: "black" };
    } else {
      return { background: "" };
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="items">
          <h1>Dashboard</h1>
          {Navigation.map((NavItem: any, idx)=> {
            return (<Link key={idx} to={NavItem.url} className="link animate__animated animate__fadeInLeft"><h2 style={currentTab(NavItem.url? NavItem.url: "")} >{NavItem.icon}{" "}{NavItem.name}</h2></Link>)
          })}
        
        </div>
      </div>
    </>
  );
};

export default Sidebar;
