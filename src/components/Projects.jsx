import SectionHeader from './SectionHeader'
import exeimg from '../../../assets/exe.png'
import './projects.css'

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <SectionHeader sectionTitle={'PROJECTS'} dark={true} />
            <div className="projects-container">
                <ul className="projects-list">
                    <li className="project-list-item">
                        <article className="project-poster"><img src={exeimg} alt="exelogo" /></article>
                        <aside className="project body">
                            <h3 className="project-title">Empieza por Educar - Admin Dashboard</h3>
                            <p className="project-description">Este proyecto está destinado a ayudar en el proceso de selección de candidat@s del Programa ExE. El objetivo es desarrollar un Admin Dashboard como una aplicación web para proporcionar una plataforma centralizada para la gestión de datos relacionados con candidatos y empleados, facilitando la gestión y el análisis de información crucial para la empresa.</p>
                            <ul className="project-stack">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </aside>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects
