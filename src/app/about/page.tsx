import Content from "./components/Content";

export default function About(){

    const myBackground = `I am a student from Asia Pacific University (APU). I started learning coding when I was 14 because I wanted to be a part of game development and from that time onward, I knew my future was in the tech sector.
Ever since I was a child, my parents taught me to be constantly curious and always kept me busy studying and learning newer and newer skills every day.
Thanks to their efforts, I am a very adaptable person with a thirst for knowledge. I love learning new skills and putting them to use as soon as I can!`;
    const myAcademics = `High School: High School Bukit Mertajam (Sekolah Menengah Kebangsaan Tinggi Bukit Mertajam)
    --> SPM (Pure Science Stream): 7A+, 3A

Diploma: Diploma in Information Communications and Technology with a Specialism in Data Informatics (Asia Pacific University)
    --> CGPA: 3.89

Japanese Language Proficiency Test:
    --> N5: Pass
    --> N4: Pass    
    `;
    const myHobbies = `I have an interest in a variety of hobbies, which I casually switch to and fro:
    - Knitting and crochet
    - Playing the piano
    - Completing online coding courses
    - Playing video games
    - Reading
    - Boxing and Muay Thai
    - Studying Japanese

Some of the games I play include:
    - Satisfactory
    - Palworld
    - Ready or Not
    - Arma 3
    - Door Kickers 2

Some of the online coding courses I have participated in are:
    - 100 Days of Coding with Repl.it
    - The Complete Web Development Bootcamp with Dr. Angela Yu
    `

    const mySkills = `Among the many different languages that I've learnt are:
    Coding:
        - Python (Beginner)
        - HTML, CSS, JS (Beginner)
        - PHP (Beginner)
        - SQL (Beginner)
        - Java (Beginner)
        - Ubuntu Server, Docker and Portainer Server Management (Ultra Beginner)
        - Node.js (Beginner)
        - React.js (Beginner)
        - Next.js (Beginner)
    Speaking:
        - English (Advanced)
        - Malay (Intermediate)
        - Japanese (Beginner)
    `;

    return (
        <div className="content-wrapper">
            <section className="about-section">
                <h2>About Me:</h2>
                <Content title="My Background:" description={myBackground} />
                <Content title="My Academics:" description={myAcademics} />
                <Content title="My Hobbies:" description={myHobbies}/>
                <Content title="My Skills:" description={mySkills}/>
            </section>
        </div>
    )
}