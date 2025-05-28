import { FolderGit2, User, House, Mail } from 'lucide-react'
import './nav.css'
import { useEffect, useState } from 'react'

const Nav = () => {

    const [activeSection, setActiveSection] = useState('#home')

    const handleChangeSection = (section) => {
        setActiveSection(section)
    }

    const getClassName = (section) => {
        return activeSection === section ? 'active' : ''
    }

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], header[id]')
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visibleSections.length > 0) {
                    const topSection = visibleSections[0]
                    setActiveSection(`#${topSection.target.id}`)
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: Array.from({ length: 101 }, (_, i) => i / 100)
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => {
            sections.forEach(section => observer.unobserve(section))
        }
    }, [])

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
