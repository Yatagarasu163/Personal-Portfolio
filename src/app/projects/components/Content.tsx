type ProjectProps = {
    title: string,
    description: string,
    imageURL: string
    projectURL: string
}


export default function Content({title, description, imageURL, projectURL} : ProjectProps){
    return (
        <div className="project-container">
            <div className="project-description">
                <h3>{title}</h3>
                <p>{description}
<br />
<br />
Click on the image to see the project files on Github!
                </p>
            </div>
            <a href={projectURL}>
                <div className="project-image">
                    <img src={imageURL}/>
                </div>
            </a>
        </div>
    )
}