import React from "react";

export default function Header(){
    return (
        <div>
           <header className="navbar">
                <div className="logo">Narish Kumar Dey</div>
                <nav>
                <ul className="nav-links">
                    <div className="nav-item">
                        <a href="/"><li className="nav-text">Home</li></a>
                    </div>
                    <div className="nav-item">
                        <a href="/about"><li className="nav-text">About Me</li></a>
                    </div>
                    <div className="nav-item">
                        <a href="/projects"><li className="nav-text">Projects</li></a>
                    </div>
                    <div className="nav-item">
                        <a href="/resume"><li className="nav-text">Resume</li></a>
                    </div>
                    <div className="nav-item">
                        <a href="/contact"><li className="nav-text">Contact Me</li></a>
                    </div>
                </ul>
                </nav>
            </header>     
        </div>
    );
}