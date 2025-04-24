type ContactProps = {
    svg: string,
    platform: string,
    link: string,
    name: string
}

export default function Contact({svg, platform, link, name} : ContactProps){
    return (
        <div className="about-card">
            <a href={link} className="contact-details">
                <img src={svg} className="svg-img"/>   {platform}: {name}
            </a>
        </div>
    )
}