import React from 'react'

const StudyGroup = ({ title, description, image }) => {
  return (
    <li className="boat-card">
      <h2>{title}</h2>
      <img src={image} alt={title} className="boat-image" />
      <p>{description}</p>
    </li>
  )
}

export default StudyGroup
