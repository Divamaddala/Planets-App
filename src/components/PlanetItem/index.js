// Write your code here
import React from 'react'
import './index.css'

const PlanetItem = ({ planetDetails }) => {
  const { name, imageUrl, description } = planetDetails

  return (
    <>
      <img className="image" src={imageUrl} alt={`Planet: ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </>
  )
}

export default PlanetItem
