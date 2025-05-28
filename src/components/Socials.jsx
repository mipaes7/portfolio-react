import { Linkedin, Github } from "lucide-react"
import './socials.css'

const Socials = () => {
  return (
    <article className="links-container">
      <div className="socials">
        <a href="https://www.linkedin.com/in/miguel-pardal-esparis/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://github.com/mipaes7" target="_blank" rel="noopener noreferrer"><Github /></a>
      </div>
      <div className="home-buttons-container">
        <button className="contact-button"><a href="#contact">Contact</a></button>
        <button className="cv-button">
          <a href="/CV_Miguel_Pardal_Esparis%20-%20EN.pdf" download="CV_Miguel_Pardal_Esparis_EN.pdf">
            Download CV
          </a>
        </button>
      </div>
    </article>
  )
}

export default Socials
