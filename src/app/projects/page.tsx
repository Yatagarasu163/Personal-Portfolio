import Content from "./components/Content";

export default function Projects(){

    const projects = [{
        title: "ASL For Beginners",
        description: `This is a quiz and flashcard website focused on educating users on the basics of American Sign Language!
This page was made using PHP, SQL, HTML, CSS and Javascript.
We have two types of users: Admin and Student
We've implemented a robust authentication system to ensure unauthorized users cannot use the website beyond the home and about page.
Students are able to:
    - Review pre-made and custom-made flashcards
    - Attempt pre-made and custom-made quizzes
    - See their attempt history
Admins are able to:
    - Create and delete quizzes and flashcards
    
This was made as part of my studies in Responsive Web Design and Development in the diploma course at APU.`,
        image: "/images/ASL.png",
        project: "https://github.com/Yatagarasu163/ASL-For-Beginners",
    }, 
    {
        title: "Kuala Lumpur Central Computer Company Management System",
        description: `This is a management system built in Python that has three management systems, namely customer management system, admin management system and inventory management system: 

Every user can:
    - Register
    - Login
    - Generate system usage report

Customer Management System:
    - Make an order for an item
    - Request repair services
    - Edit orders and requests
    - Cancel orders and requests
    - Inquire about orders and requests
    - Make payment (through a pseudo payment gateway)

Admin Management System:
    - Super Users (Super Admin) can:
        --> Add users
        --> Verify users
        --> Modify user details
        --> Disable users
        --> View user system usage
        --> View customer order status
    - Staff (Admin) can:
        --> Verify users
        --> View customer order status

Inventory Management System:
    - Inquire about stock availability
    - Place stock orders
    - Inquire service requests
    - Edit stock availability
    - Modify stock orders
    - Cancel stock orders
        `,
        image: "/images/KLCCC.png",
        project: "https://github.com/Yatagarasu163/KLCCC",
    },
    {
        title: "APU Hostel Management System",
        description: `This is a GUI-based fees management system that helps to manage APU's hostel fees payment. It has three users, namely resident, staff and manager.
Resident Functions: 
    - Sign up for rooms
    - Check for payment status
    - Edit user details

Staff Functions: 
    - Make payment for residents
    - Generate receipts

Manager Functions: 
    - Approve user registration (for all users)
    - Search, update and delete user accounts
    - Fix and update the room rates

        `,
        image: "/images/java.png",
        project: "https://github.com/Yatagarasu163/APU-Hostel-Management-System",
    },
    {
        title: "Holiday Tracker",
        description: `This is a website that checks if there is a holiday today or not based on an API!
The website was made as Capstone Project 4 for Dr Angela Yu's Complete Web Development Bootcamp.
This website will make a get request to the holiday API and then if there is a holiday, it will notify the user that there is a holiday on that day.
        `,
        image: "/images/holiday.png",
        project: "https://github.com/Yatagarasu163/Holiday-Tracker"
    },
    {
        title: "Capstone Blog Website",
        description: `This is a simple blog website that lets the user make a post, edit it and delete them!
This website was made as Capstone Project 3 for Dr Angela Yu's Complete Web Development Bootcamp. 
When the blog posts are empty, it will notify the user that there are no blog posts at the time. 
`,
        image: "/images/blog.png",
        project: "https://github.com/Yatagarasu163/Blog-Post",
    },
    {
        title: "Healthcare Prediction Model",
        description: `This is a predictive model made as part of my Introduction to Data Analytics module in my APU Diploma.
This RapidMiner process mines the data from the Excel sheet that is found within the repository.
It goes through a thorough cleaning and preprocessing before it is used to train and test a neural network model to predict the total direct expenses of the laundry and linen department using a combination of a few factors that are related to the expenses of the healthcare institution.

After thorough testing, we decided that the neural network model has the best accuracy possible. This process also has a visualisation tool to aid in visualizing some of the details of the dataset.`,
        image: "/images/prediction.png",
        project: "https://github.com/Yatagarasu163/Healthcare-Laundry-and-Linen-Regression-Model"
    }
];

    return (
        <div>
            <section className="project-section">
                <h2 className="section-title">Projects:</h2>
                {projects.map((item, index) => {
                    return <Content key={index} title={item.title} description={item.description} imageURL={item.image} projectURL={item.project}/>
                })}
            </section>
        </div>
    )
}