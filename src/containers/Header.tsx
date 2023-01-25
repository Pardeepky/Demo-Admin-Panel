import React from "react";
import { Navbar } from "react-bootstrap";
import {FiLogOut} from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { showToast } from "../common/Util";

const Header = () => {

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    showToast("Logged out Succesfully");
    navigate('/login')
  };

  return (
    <>
      <Navbar>
        <div className="header">
          <div className="hand">
            <FiLogOut size={30} onClick={logout} />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
