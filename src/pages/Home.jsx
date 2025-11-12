import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to Crewmate Creator!</h1>
      <p>Build your dream team of crewmates!</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/create">
          <button className="submit-btn" style={{ maxWidth: '300px' }}>
            Create a New Crewmate
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home