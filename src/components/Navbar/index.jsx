import React, { useState } from "react";

import BurguerMenu from "./BurguerMenu";
import DevLogo from "./DevLogo";
import NavSearch from "./NavSearch";
import MovileSearch from "./MovileSearch";
import AppButton from "../AppButton";
import NavIcon from "../Navbar/NavIcon";
import NavAvatar from "./NavAvatar";
import DropDownMenu from "./DropDownMenu";

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
          <BurguerMenu
            className="d-xs-block d-md-none"
            src="../../images/icon-menu.svg"
          />
          <DevLogo className="navbar-logo" />
          <NavSearch className="d-none d-md-block navbar-search" />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center mr-5 ">
          <MovileSearch
            className="d-none d-md-block movile-search d-xs-block d-md-none"
            src="../../images/icon-search.svg"
          />
          <AppButton
            type="anchor"
            text="Create post"
            data-view="NewPost"
            className="d-none d-md-block btn-post mr-2"
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
          >
            <DropDownMenu />
          </NavAvatar>
        </div>
      </div>
      <Routes />
    </nav>
  );
};
