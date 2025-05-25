import './sectionheader.css'

const SectionHeader = ({sectionTitle ,dark}) => {
    return (
        <header className='section-header'>
            <div className='section-header-text'>
                <div className={dark ? 'line-darkBG' : 'line'}></div>
                <h1 className={dark ? 'section-header-title-darkBG' : 'section-header-title'}>{sectionTitle}</h1>
                <div className={dark ? 'line-darkBG' : 'line'}></div>
            </div>
        </header>
    )
}

export default SectionHeader
