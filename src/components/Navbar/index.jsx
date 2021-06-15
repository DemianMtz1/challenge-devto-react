import React from "react";
import DevLogo from "./DevLogo";
import NavSearch from "./NavSearch";
import AppButton from "../AppButton";
import NavIcon from "../Navbar/NavIcon";
import NavAvatar from "./NavAvatar";

import { Link } from "react-router-dom";
import { Routes } from "../Routes";

import "../../css/interior.scss";
import "../../css/newpost.scss";
import "../../css/style.scss";
import "../../css/viewpost.scss";
import "../../css/navbar.css";

export const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="d-flex flex-row justify-content-between ">
        <div className="navbar d-flex flex-row justify-content-center align-items-center">
          <DevLogo className="navbar-logo" />
          <NavSearch className="navbar-search" />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center ">
          <AppButton
            type="anchor"
            text="Create post"
            data-view="NewPost"
            className="btn-post mr-2"
          />
          <NavIcon className="ml-3 mr-3 " src="../../images/icon-connect.svg" />
          <NavIcon
            className="ml-3 mr-3"
            src="../../images/icon-notification.svg"
          />
          <NavAvatar
            id="user-dropdown-pic"
            style="width: 40px; height: 40px;"
            className="navbar-avatar"
          />
        </div>
      </div>
      <Routes />
    </nav>
  );
};
