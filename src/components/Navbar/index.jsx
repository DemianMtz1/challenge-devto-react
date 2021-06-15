import React from "react";
import DevLogo from "./DevLogo";
import NavSearch from "./NavSearch";
import AppButton from "../AppButton";

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
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <DevLogo />
          <NavSearch />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <AppButton
            type="anchor"
            text="Write a post"
            data-view="NewPost"
            className="btn-post"
          />
        </div>
      </div>
    </nav>
    // <div>
    //   <ul>
    //     <li>
    //       {/* <Link to="/">Home</Link> */}
    //     </li>
    //     <li>
    //       <Link to="/write-post">Write a post</Link>
    //     </li>
    //     <li>
    //       <Link to="/post-details/:id">Details</Link>
    //     </li>
    //   </ul>

    //   <Routes />
    // </div>
  );
};
