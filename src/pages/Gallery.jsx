import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Gallery() {
  const navigate = useNavigate()
  const [crewmates, setCrewmates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCrewmates()
  }, [])

  const fetchCrewmates = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching crewmates:', error)
    } else {
      setCrewmates(data)
    }
    setLoading(false)
  }

  if (loading) {
    return <div>Loading crewmates...</div>
  }

  if (crewmates.length === 0) {
    return (
      <div>
        <h2>Crewmate Gallery</h2>
        <p>No crewmates yet! Create one to get started.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Crewmate Gallery</h2>
      <p>Total Crewmates: {crewmates.length}</p>
      <div className="gallery">
        {crewmates.map((crewmate) => (
          <div
            key={crewmate.id}
            className="crewmate-card"
            onClick={() => navigate(`/crewmate/${crewmate.id}`)}
          >
            <h3>{crewmate.name}</h3>
            <p>Speed: {crewmate.speed}</p>
            <p>Color: {crewmate.color}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery