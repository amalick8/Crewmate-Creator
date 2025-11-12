import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreateCrewmate from './pages/CreateCrewmate'
import Gallery from './pages/Gallery'
import CrewmateDetail from './pages/CrewmateDetail'
import EditCrewmate from './pages/EditCrewmate'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Crewmate</Link>
        <Link to="/gallery">Crewmate Gallery</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
      </Routes>
    </div>
  )
}

export default App