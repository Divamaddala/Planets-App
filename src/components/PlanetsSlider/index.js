// Write your code here
import React from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = ({ planetsList }) => {
  return (
    <>
      <h1 className="heading">PLANETS</h1>
      <div className="planets-app-container">
        <Slider>
          {planetsList.map(planet => (
            <PlanetItem key={planet.id} planetDetails={planet} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default PlanetsSlider
