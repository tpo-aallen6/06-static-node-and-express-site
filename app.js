const express = require('express')
const app = express()
const port = 3000

const projectData = require('./data.json')

app.use('/static', express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', projectData)
})

app.get('/about', (req, res) => {
  res.render('about', projectData)
})

app.get('/project/:id', (req, res) => {
  const projectIndex = parseInt(req.params.id) - 1
  res.render('project', projectData.projects[projectIndex])
})

app.use((req, res, next) => {
  const err = new Error('That page does not exist, please go back.')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)

  if (err.status === 404) {
    console.log('Sorry, that page was not found.')
    res.render('page-not-found', {
      err: {
        message: err.message,
        status: err.status
      }
    })
  } else {
    err.message = 'Sorry, something went wrong. PLease try again'
    err.status = 500
    console.log('Sorry, something went wrong. Please try again.')
    res.render('error', {
      err: {
        message: err.message,
        status: err.status
      }
    })
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`)
})
