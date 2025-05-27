import { ArrowUpRight } from 'lucide-react'
import './project.css'

const Project = ({imgSrc, linkToProject, projectTitle, projectDesc, projectStack}) => {
    return (
        <li className="project-list-item">
            <article className="project-poster"><img src={imgSrc} alt="exelogo" /></article>
            <aside className="project-body">
                <h3 className="project-title">
                    <a href={linkToProject} target='_blank'>{projectTitle}</a>
                    <ArrowUpRight className="arrow-icon" size={18}/>
                </h3>
                <p className="project-description">{projectDesc}</p>
                <ul className="project-stack">
                    {
                        projectStack.map(tech => (
                            <li key={crypto.randomUUID()}>{tech}</li>
                        ))
                    }
                </ul>
            </aside>
        </li>
    )
}

export default Project
