import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function EditCrewmate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCrewmate()
  }, [id])

  const fetchCrewmate = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching crewmate:', error)
    } else {
      setName(data.name)
      setSpeed(data.speed)
      setColor(data.color)
    }
    setLoading(false)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('crewmates')
      .update({ name: name, speed: speed, color: color })
      .eq('id', id)

    if (error) {
      console.error('Error updating crewmate:', error)
      alert('Error updating crewmate!')
    } else {
      alert('Crewmate updated successfully!')
      navigate(`/crewmate/${id}`)
    }
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this crewmate?')
    
    if (confirmDelete) {
      const { error } = await supabase
        .from('crewmates')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting crewmate:', error)
        alert('Error deleting crewmate!')
      } else {
        alert('Crewmate deleted successfully!')
        navigate('/gallery')
      }
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="form-container">
      <h2>Edit Crewmate</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Speed:</label>
          <div className="attribute-options">
            {['Slow', 'Medium', 'Fast', 'Very Fast'].map((option) => (
              <div
                key={option}
                className={`attribute-option ${speed === option ? 'selected' : ''}`}
                onClick={() => setSpeed(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Color:</label>
          <div className="attribute-options">
            {['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'].map((option) => (
              <div
                key={option}
                className={`attribute-option ${color === option ? 'selected' : ''}`}
                onClick={() => setColor(option)}
                style={{ backgroundColor: option.toLowerCase(), color: 'white' }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Update Crewmate
        </button>
        <button 
          type="button" 
          className="submit-btn delete-btn"
          onClick={handleDelete}
        >
          Delete Crewmate
        </button>
      </form>
    </div>
  )
}

export default EditCrewmate