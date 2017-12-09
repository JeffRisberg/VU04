const express = require('express')

const incidentsRouter = express.Router()

const bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  incidentsRouter.use(bodyParser.json())

  const incidentsDB = app.incidentsDB

  incidentsRouter.get('/', function (req, res) {
    delete req.query['_']
    incidentsDB.find(req.query).exec(function (error, incidents) {
      setTimeout(
        () => res.send({
          'status': 'ok',
          'data': incidents
        }),
        2000)
    })
  })

  incidentsRouter.post('/', function (req, res) {
    // Look for the most recently created record
    incidentsDB.find({}).sort({id: -1}).limit(1).exec(function (err, incidents) {

      if (incidents.length != 0)
        req.body.incident.id = incidents[0].id + 1
      else
        req.body.incident.id = 1

      // Insert the new record
      incidentsDB.insert(req.body.incident, function (err, newIncident) {
        res.status(201)
        res.send({'status': 'ok', 'data': [newIncident]})
      })
    })
  })

  incidentsRouter.get('/:id', function (req, res) {
    incidentsDB.find({id: req.params.id}).exec(function (error, incidents) {
      setTimeout(() => {
        if (incidents.length > 0)
          res.send({
            'status': 'ok',
            'data': incidents[0]
          })
        else {
          res.status(404)
          res.send({
            'status': 'missing',
            'data': null
          })
        }
      }, 1000)
    })
  })

  incidentsRouter.put('/:id', function (req, res) {
    const incident = req.body.incident

    incidentsDB.update({id: req.params.id}, incident, {}, function () {
      res.send({'status': 'ok', 'data': [incident]})
    })
  })

  incidentsRouter.delete('/:id', function (req, res) {
    incidentsDB.remove({id: req.params.id}, {}, function () {
      res.status(204).end()
    })
  })

  app.use('/api/incidents', incidentsRouter)
}
