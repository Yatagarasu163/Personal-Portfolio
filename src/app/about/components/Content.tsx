type ContentProps = {
    title: string;
    description: string;
}

export default function Content({title, description} : ContentProps){
    return (
        <div className="about-card">
            <h3>{title}</h3>
                {description.split("\n").map((line, index) => {
                return (
                    <p key={index}>
                        {line}
                        <br />  
                    </p>
                                            
                )
            })}
        </div>
    )
}