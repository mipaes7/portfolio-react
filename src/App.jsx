import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import './app.css'

function App() {

  return (
    <>
      <div className="app">
        <main>
          <Header />
          <AboutMe />
          <Projects />
        </main>
      </div>
    </>
  )
}

export default App
