const React = require('react')
const Default = require('./default')

function Show ({car}) {
    return (
      <Default>
        <h2>{car.make}</h2>
        <img src={car.image}></img>
        <p>
            Model: {car.model}
            Year: {car.year}
            Color: {car.color}
            Mileage: {car.milage} miles per gallon
        </p>
      </Default>
    )
}

module.exports = Show