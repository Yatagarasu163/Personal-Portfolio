import React from "react";

export default function Header(){
    return (
        <div>
           <header className="navbar">
                <div className="logo">Kay Faraday</div>
                <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
                </nav>
            </header>     
        </div>
    );
}