import Header from "./components/Header"
import './app.css'
import AboutMe from "./components/AboutMe"

function App() {

  return (
    <>
      <div className="app">
        <main>
          <Header />
          <AboutMe />
        </main>
      </div>
    </>
  )
}

export default App
