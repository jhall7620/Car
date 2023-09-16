const React = require('react')

function Nav(html) {
  return (
    <nav>
        <ul>
        <li>
            <a href="index.html">Home</a>
        </li>
        <li>
            <a href="HyperCar.html">Hyper Cars </a>
        </li>
        <li>
            <a href="MuscleCar.html">Muscle Cars</a>
        </li>
        <li>
            <a href="SportsCar.html">Sports Cars </a>
        </li><li>
            <a href="SuvCar.html">Suv Cars </a>
        </li>
        <button onclick="myFunction()">Toggle dark mode</button>
        </ul>
    </nav>
  )
}

module.exports = Nav