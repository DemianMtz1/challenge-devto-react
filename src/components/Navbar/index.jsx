import React from 'react'
import {
    Link,
  } from "react-router-dom";
import {Routes} from '../Routes';
  
export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Logo</Link>
                </li>
                <li>
                    <input type="text" />
                </li>
                <li>
                    <Link to="/post-details/:id">Details</Link>
                </li>
            </ul>


            <Routes />
        </nav>
    )
}
