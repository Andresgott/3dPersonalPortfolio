import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"


export const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={'Home'}/>
                <Route path="/aboutMe" element={'About me'}/>
                <Route path="/projects" element={'Projects'}/>
                <Route path="/contact" element={'Contact'}/>
            </Routes>
        </Router>

    </main>
  )
}

export default App
