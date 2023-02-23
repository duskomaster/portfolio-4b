import React from "react";
import {MenuData} from'../data'

const Navbar = () => {
    return (
        <nav className= 'app-navbar'>
            <h1>LOGO</h1>
            <ul>
                {MenuData.map((item) => {
                    return(
                        <li>
                            <a href={item.url} > {item.title} </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        
    )
};
export default Navbar;