import React, { useEffect } from "react";
import "./theme/style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { readSession } from "./common/Util";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";

const App = () => {

  const navigate = useNavigate();
  useEffect(() => {
    let userdata = readSession("token");
    if (typeof userdata !== "string") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
