import AboutmeComponent from "../components/home/AboutMe"

export default function Aboutme() {

    const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    };

    return (
        <div className="aboutme">
            <AboutmeComponent onContactClick={scrollToFooter}/>
        </div>
    )
}
