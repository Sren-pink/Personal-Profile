import Skills from "../components/home/Skills";
import ClickToPlayOnce from "../components/home/ClickToPlayOnce";
import PortfolioSection from "../components/portfolio/PortfolioSection";

import animMp4   from "../assets/projectimages/homepage/Untitled_Artwork.mp4";
import posterPng from "../assets/projectimages/homepage/Untitled_Artwork-first-frame.png";

export default function Home() {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home" style={{ padding: "1rem" }}>
      <ClickToPlayOnce src={animMp4} poster={posterPng} className="vw-bleed" />
      <Skills />
      <PortfolioSection title="Portfolio" initialFilter="all" />
    </div>
  );
}

