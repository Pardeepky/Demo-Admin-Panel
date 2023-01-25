import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { adminRoutes } from "./routes";
import 'animate.css';

interface IAcceptAll {
  [x: string]: any;
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          {adminRoutes.map((route: IAcceptAll, idx)=> {
            return (
              route.component && (
                <Route
                key={idx}
                path={route.path}
                element={<route.component/>}
                />
              )
            )
          })}
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
