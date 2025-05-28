import SectionHeader from './SectionHeader'
import exeimg from '../assets/exe.png'
import './projects.css'
import Project from './Project'

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <SectionHeader sectionTitle={'PROJECTS'} dark={true} />
            <div className="projects-container">
                <ul className="projects-list">
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'Empieza por Educar - Admin Dashboard'}
                        projectDesc={'Este proyecto está destinado a ayudar en el proceso de selección de candidat@s del Programa ExE. El objetivo es desarrollar un Admin Dashboard como una aplicación web para proporcionar una plataforma centralizada para la gestión de datos relacionados con candidatos y empleados, facilitando la gestión y el análisis de información crucial para la empresa.'}
                        linkToProject={'https://github.com/diegoblazquezr/DT_Empieza_por_Educar'}
                        imgSrc={exeimg}
                        projectStack={['React', 'SASS', 'Node', 'Express', 'MySQL']}
                    />
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'Empieza por Educar - Admin Dashboard'}
                        projectDesc={'Este proyecto está destinado a ayudar en el proceso de selección de candidat@s del Programa ExE. El objetivo es desarrollar un Admin Dashboard como una aplicación web para proporcionar una plataforma centralizada para la gestión de datos relacionados con candidatos y empleados, facilitando la gestión y el análisis de información crucial para la empresa.'}
                        linkToProject={'https://github.com/diegoblazquezr/DT_Empieza_por_Educar'}
                        imgSrc={exeimg}
                        projectStack={['React', 'Node']}
                    />
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'Empieza por Educar - Admin Dashboard'}
                        projectDesc={'Este proyecto está destinado a ayudar en el proceso de selección de candidat@s del Programa ExE. El objetivo es desarrollar un Admin Dashboard como una aplicación web para proporcionar una plataforma centralizada para la gestión de datos relacionados con candidatos y empleados, facilitando la gestión y el análisis de información crucial para la empresa.'}
                        linkToProject={'https://github.com/diegoblazquezr/DT_Empieza_por_Educar'}
                        imgSrc={exeimg}
                        projectStack={['React', 'Node']}
                    />
                </ul>
            </div>
        </section>
    )
}

export default Projects
