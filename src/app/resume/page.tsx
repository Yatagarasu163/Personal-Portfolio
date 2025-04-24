import { useState } from "react";
import Content from "./components/Content";

export default function Resume(){
    return (
        <section className="resume-section">
            <h2>My Resume:</h2>
            <Content />

            <a href="/downloads/Narish Kumar Dey.pdf" download>
                <div className="resume-download-button">
                    Download my Resume!
                </div>
            </a>
        </section>
    )
}