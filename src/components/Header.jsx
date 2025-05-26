import Nav from './Nav'
import Socials from './Socials'
import './header.css'

const Header = () => {
  return (
    <header id='home' className='header-component'>
      <h1 className='header-text'>MIGUEL PARDAL</h1>
      <Socials />
      <Nav />
    </header>
  )
}

export default Header
