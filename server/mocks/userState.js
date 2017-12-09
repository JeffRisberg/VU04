const express = require('express')

const userStatesRouter = express.Router()

const bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  userStatesRouter.use(bodyParser.json())

  const userStatesDB = app.userStatesDB

  userStatesRouter.get('/', function (req, res) {
    delete req.query['_']
    userStatesDB.find(req.query).exec(function (error, userStates) {
      setTimeout(
        () => res.send({
          'status': 'ok',
          'data': userStates
        }),
        2000)
    })
  })

  userStatesRouter.post('/', function (req, res) {
    // Look for the most recently created record
    userStatesDB.find({}).sort({id: -1}).limit(1).exec(function (err, userStates) {

      if (userStates.length != 0)
        req.body.userState.id = userStates[0].id + 1
      else
        req.body.userState.id = 1

      // Insert the new record
      userStatesDB.insert(req.body.userState, function (err, newUserState) {
        res.status(201)
        res.send({'status': 'ok', 'data': [newUserState]})
      })
    })
  })

  userStatesRouter.get('/:id', function (req, res) {
    userStatesDB.find({id: req.params.id}).exec(function (error, userStates) {
      setTimeout(() => {
        if (userStates.length > 0)
          res.send({
            'status': 'ok',
            'data': userStates[0]
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

  userStatesRouter.put('/:id', function (req, res) {
    const userState = req.body.userState

    userStatesDB.update({id: req.params.id}, userState, {}, function () {
      res.send({'status': 'ok', 'data': [userState]})
    })
  })

  userStatesRouter.delete('/:id', function (req, res) {
    userStatesDB.remove({id: req.params.id}, {}, function () {
      res.status(204).end()
    })
  })

  app.use('/api/userStates', userStatesRouter)
}
