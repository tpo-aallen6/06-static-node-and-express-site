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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`)
})
