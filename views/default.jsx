const React = require('react')
const Nav = require('nav')

function Default(html) {
  return (
    <html>
    <head>
      <title>Car Project</title>
      <link rel="stylesheet" href='/main.css'/>
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1><a href="/breads">Car</a></h1>
        </header>
        <Nav></Nav>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>

    </html>
  )
}

module.exports = Default