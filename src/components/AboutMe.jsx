import { ArrowUpRight, CodeXml, GraduationCap } from 'lucide-react'
import './aboutme.css'
import SectionHeader from './SectionHeader'

const AboutMe = () => {
    return (
        <section id='aboutme' className='aboutme-section'>
            <SectionHeader sectionTitle={"ABOUT ME"} dark={false} />
            <div className='aboutme-info'>
                <article className='aboutme-generals'>
                    <p className='aboutme-generals-text'>Aspiring web developer, currently working as an Automation QA</p>
                    <p className='aboutme-generals-text'>I transitioned from navigating real ships to navigating the digital world — a former maritime officer now charting new courses in web development.</p>
                    <p className='aboutme-generals-text'>Fun fact: I reached Grandmaster tier in Teamfight Tactics, ranking among the top 0.035% of players on the EU West server at the time.</p>
                </article>
                <article className='aboutme-experience'>
                    <h2>Experience</h2>
                    <div className='experience-card'>
                        <header className='experience-card-header'>09/2024 - Present</header>
                        <div className='experience-card-body'>
                            <h3 className='experience-card-body-title'>
                                Software Automation QA ·
                                <span className="company-link-wrapper">
                                    <a href="https://www.ncs-spain.com/" target='_blank'>NCS - Spain</a>
                                    <ArrowUpRight className="arrow-icon" size={18}/>
                                </span>
                            </h3>
                            <p className='experience-card-body-text'>Build and maintain E2E tests on two separate frontend projects. Work closely with cross-functional teams.</p>
                            <ul className='experience-card-body-stack'>
                                <li>.NET</li>
                                <li>C#</li>
                                <li>Selenium</li>
                                <li>Postman</li>
                                <li>Azure</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className='aboutme-education'>
                    <h2>Education</h2>
                    <ul className='education-card-list'>
                        <li className='education-card'>
                            <div className='education-card-icon'><CodeXml size={18} /></div>
                            <div className='education-card-body'>CFGS - Desarrollo de Aplicaciones Web at ILERNA</div>
                        </li>
                        <li className='education-card'>
                            <div className='education-card-icon'><CodeXml size={18} /></div>
                            <div className='education-card-body'>
                                Full Stack Bootcamp at
                                <a href="https://thebridge.tech/" target='_blank'>
                                    <img src="https://tf-thebridge-production-public-files.s3.eu-west-1.amazonaws.com/the_bridge_logo_bc18d0b1dd.svg" alt="bootcamp icon" className='bootcamp-icon'/>
                                </a>
                            </div>
                        </li>
                        <li className='education-card'>
                            <div className='education-card-icon'><GraduationCap /></div>
                            <div className='education-card-body'>Grado en Náutica y Transporte Marítimo at Universidade de A Coruña</div>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default AboutMe
