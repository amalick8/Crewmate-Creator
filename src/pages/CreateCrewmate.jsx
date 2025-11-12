import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

function CreateCrewmate() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!name || !speed || !color) {
      alert('Please fill in all fields!')
      return
    }

    const { data, error } = await supabase
      .from('crewmates')
      .insert([
        { name: name, speed: speed, color: color }
      ])

    if (error) {
      console.error('Error creating crewmate:', error)
      alert('Error creating crewmate!')
    } else {
      console.log('Crewmate created:', data)
      alert('Crewmate created successfully!')
      navigate('/gallery')
    }
  }

  return (
    <div className="form-container">
      <h2>Create a New Crewmate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter crewmate name"
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
          Create Crewmate
        </button>
      </form>
    </div>
  )
}

export default CreateCrewmate