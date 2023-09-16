const React = require('react')

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
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>

    </html>
  )
}

module.exports = Default