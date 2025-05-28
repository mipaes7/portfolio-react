import SectionHeader from './SectionHeader'
import Project from './Project'
import './projects.css'
import exeimg from '../assets/exe.png'
import quizimg from '../assets/quiz.png'
import nytimg from '../assets/nyt.png'
import weather from '../assets/wreporto.png'

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <SectionHeader sectionTitle={'PROJECTS'} dark={true} />
            <div className="projects-container">
                <ul className="projects-list">
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'Empieza por Educar - Admin Dashboard'}
                        projectDesc={'This project is intended to assist in the candidate selection process for the ExE Program. The goal is to develop an Admin Dashboard as a web application to provide a centralized platform for managing data related to candidates and employees, facilitating the management and analysis of crucial information for the company.'}
                        linkToProject={'https://github.com/diegoblazquezr/DT_Empieza_por_Educar'}
                        imgSrc={exeimg}
                        projectStack={['React', 'SASS', 'Node', 'Express', 'MySQL']}
                    />
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'Quiz Game'}
                        projectDesc={'This project is an interactive web-based Quiz application. It allows users to register, log in, and answer random questions on various topics. Users can also view their results and performance charts. Firebase is used for authentication and data storage.'}
                        linkToProject={'https://mipaes7.github.io/proyectoQuiz/'}
                        imgSrc={quizimg}
                        projectStack={['Javascript', 'HTML', 'CSS', 'Firebase']}
                    />
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'New York Times Best Sellers'}
                        projectDesc={'This web application allows users to explore, filter, and save their favorite books from The New York Times Best Sellers lists. Users can register, log in, and customize their list of favorites.'}
                        linkToProject={'https://mipaes7.github.io/bibliotecaProject/'}
                        imgSrc={nytimg}
                        projectStack={['Javascript', 'HTML', 'CSS', 'Firebase']}
                    />
                    <Project
                        key={crypto.randomUUID()}
                        projectTitle={'Weather Report App'}
                        projectDesc={'This interactive web application allows users to search for and view 5-day weather forecasts for any city using the OpenWeatherMap API. It includes geolocation functionality to detect the user’s current location and display local weather data. Users can manually search for cities, and the results are displayed as individual weather cards.'}
                        linkToProject={'https://resplendent-wisp-445566.netlify.app/'}
                        imgSrc={weather}
                        projectStack={['React', 'Axios', 'CSS']}
                    />
                </ul>
            </div>
        </section>
    )
}

export default Projects
