import { ArrowUpRight } from 'lucide-react'
import './project.css'

const Project = ({ imgSrc, linkToProject, projectTitle, projectDesc, projectStack }) => {
  return (
    <li>
      <article className="project-list-item">
        <a
          href={linkToProject}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-wrapper"
          aria-label={`Visit ${projectTitle} project`}
        >
          <div className="project-poster">
            <img
              src={imgSrc}
              alt={`${projectTitle} preview`}
              loading="lazy"
            />
          </div>
        </a>

        <aside className="project-body">
          <h3 className="project-title">
            <a
              href={linkToProject}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectTitle}
            </a>
            <ArrowUpRight className="arrow-icon" size={18} />
          </h3>

          <p className="project-description">{projectDesc}</p>

          <ul className="project-stack">
            {projectStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </aside>
      </article>
    </li>
  );
};

export default Project
