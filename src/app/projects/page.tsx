import Content from "./components/Content";

export default function Projects(){

    const aslPage = `This is a quiz and flashcard website focused on educating users on the basics of American Sign Language!
This page was made using PHP, SQL, HTML, CSS and Javascript.
We have two types of users: Admin and Student
We've implemented a robust authentication system to ensure unauthorized users cannot use the website beyond the home and about page.
Students are able to:
    - Review pre-made and custom-made flashcards
    - Attempt pre-made and custom-made quizzes
    - See their attempt history
Admins are able to:
    - Create and delete quizzes and flashcards
    
This was made as part of my studies in Responsive Web Design and Development in the diploma course at APU.`

    return (
        <div>
            <section className="project-section">
                <h2 className="section-title">Projects:</h2>
                <Content title="ASL for Beginners" description={aslPage} imageURL="/images/ASL.png" projectURL="https://github.com/Yatagarasu163/ASL-For-Beginners"/>
            </section>
        </div>
    )
}