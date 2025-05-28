import { FolderGit2, User, House, Mail } from 'lucide-react'
import './nav.css'
import { useSections } from '../hooks/useSections'

const Nav = () => {

    const { activeSection, getClassName, handleChangeSection } = useSections()

    return (
        <nav className={activeSection === '#home' ? 'nav-home' : 'nav-bottom'}>
            <a
                onClick={() => handleChangeSection('#home')}
                href='#home'
                className={`nav-item ${getClassName('#home')}`}
                data-label="HOME"
            >
                <House size={48} />
            </a>
            <a
                onClick={() => handleChangeSection('#aboutme')}
                href='#aboutme'
                className={`nav-item ${getClassName('#aboutme')}`}
                data-label="ABOUT ME"
            >
                <User size={48} />
            </a>
            <a
                onClick={() => handleChangeSection('#projects')}
                href='#projects'
                className={`nav-item ${getClassName('#projects')}`}
                data-label="PROJECTS"
            >
                <FolderGit2 size={48} />
            </a>
            <a
                onClick={() => handleChangeSection('#contact')}
                href='#contact'
                className={`nav-item ${getClassName('#contact')}`}
                data-label="CONTACT"
            >
                <Mail size={48} />
            </a>
        </nav>
    )
}

export default Nav
