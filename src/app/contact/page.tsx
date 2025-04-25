import Contact from "./components/Contact";

export default function Home(){

    const platforms = [
        {
            svg: "/images/instagram.svg",
            link: "https://www.instagram.com/ahoumanbeing/",
            platform: "Instagram",
            name: "@ahoumanbeing"
        },
        {
            svg: "https://www.svgrepo.com/show/108614/linkedin.svg",
            link: "https://www.linkedin.com/in/narish-kumar-dey-b7ba97284/",
            platform: "LinkedIn",
            name: "Narish Kumar Dey"
        },
        {
            svg: "/images/github.svg",
            link: "https://github.com/Yatagarasu163",
            platform: "GitHub",
            name: "Yatagarasu163"
        },
        {
            svg: "/images/whatsapp.svg",
            link: "https://wa.me/124949309?text=Hello%2C%20I%20found%20your%20Whatsapp%20contact%20number%20from%20your%20personal%20portfolio%20website!",
            platform: "Whatsapp",
            name: "+6012-494-9309"
        }, 
        {
            svg: "/images/gmail.svg",
            link: "mailto:nradih2345@gmail.com",
            platform: "Gmail",
            name: "HarapecoNoroi",
        },
    ]

    return (
        <div className="content-wrapper">       
            <main className="about-section">
                <h2>Contact Me:</h2>
                <div className="contact-info">
                    {platforms.map((item, index) => {
                        return <Contact key={index} svg={item.svg} link={item.link} platform={item.platform} name={item.name}/>
                    })}
                </div> 
            </main>
        </div>
    )
}