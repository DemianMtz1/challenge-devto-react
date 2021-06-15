import React from 'react'
import {
    Link,
  } from "react-router-dom";
import {Routes} from '../Routes';
  
export const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/write-post" >Write a post</Link>
                </li>
                <li>
                    <Link to="/post-details/:id">Details</Link>
                </li>
            </ul>


            <Routes />
        </div>
    )
}
