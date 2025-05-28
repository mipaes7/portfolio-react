import { useEffect, useRef, useState } from "react"

export const useSections = () => {

    const [activeSection, setActiveSection] = useState('#home')
    const timeoutRef = useRef(null)

    const handleChangeSection = (section) => {
        setActiveSection(section)
    }

    const getClassName = (section) => {
        return activeSection === section ? 'active' : ''
    }

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], header[id]')

        const visibilityThresholds = {
            '#home': 0.75,
            '#aboutme': 0.2,
            '#projects': 0.3,
            '#contact': 0.3,
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter(entry => {
                        const id = `#${entry.target.id}`
                        const threshold = visibilityThresholds[id] || 0.3
                        return entry.intersectionRatio >= threshold
                    })
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visibleSections.length > 0) {
                    const topSectionId = `#${visibleSections[0].target.id}`

                    clearTimeout(timeoutRef.current)
                    timeoutRef.current = setTimeout(() => {
                        setActiveSection(topSectionId)
                    }, 75)
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

    return { activeSection, handleChangeSection, getClassName }


}