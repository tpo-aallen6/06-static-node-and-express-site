const express = require('express')
const app = express()
const port = 3000

const projectData = require('./data.json')

// set the static route
app.use('/static', express.static('public'))

// set the view engine to pug
app.set('view engine', 'pug')

// root route
app.get('/', (req, res) => {
  res.render('index', projectData)
})

// about route
app.get('/about', (req, res) => {
  res.render('about', projectData)
})

// project route with error handler
app.get('/project/:id', (req, res) => {
  const projectIndex = parseInt(req.params.id) - 1
  res.render('project', projectData.projects[projectIndex], (err, html) => {
    if (err) {
      res.render('error', {
        err: {
          message: 'Something went wrong, please go back.',
          status: 500
        }
      })
    } else {
      res.send(html)
    }
  })
})

// 404 route handler
app.use((req, res, next) => {
  res.render('page-not-found', {
    err:
    {
      message: 'That page does not exist, please go back.',
      status: 404
    }
  })
})

// listens to localhost:3000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`)
})
