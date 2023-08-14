import React from 'react'
import {FaTwitter, FaGithub} from "react-icons/fa";
import './Footer.css';

const Footer =()=> {
    return (
        <div className="footer">
        <div className="overlay">
            <h1>Dave|Data Analyst</h1>
            <footer>&copy; Copyright 2023 All rights Reserved</footer>
            <ul>
                <li>
                    <a href="https://twitter.com/karanjadavid_M" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                </li>
                <li><a href="https://github.com/karanjadavid" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer;
