/* eslint handle-callback-err:off */
const express = require('express')

const userStateRouter = express.Router()

const bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  userStateRouter.use(bodyParser.json())

  const userStateDB = app.userStateDB

  userStateRouter.get('/', function (req, res) {
    delete req.query['_']
    userStateDB.find(req.query).exec(function (error, userStates) {
      setTimeout(
        () => res.send({
          'status': 'ok',
          'data': userStates
        }),
        2000)
    })
  })

  userStateRouter.post('/', function (req, res) {
    // Look for the most recently created record
    userStateDB.find({}).sort({id: -1}).limit(1).exec(function (err, userStates) {

      if (userStates.length !== 0) {
        req.body.userState.id = userStates[ 0 ].id + 1
      } else {
        req.body.userState.id = 1
      }

      // Insert the new record
      userStateDB.insert(req.body.userState, function (err, newUserState) {
        res.status(201)
        res.send({'status': 'ok', 'data': [newUserState]})
      })
    })
  })

  userStateRouter.get('/:id', function (req, res) {
    userStateDB.find({id: req.params.id}).exec(function (error, userStates) {
      setTimeout(() => {
        if (userStates.length > 0) {
          res.send({
            'status': 'ok',
            'data': userStates[ 0 ]
          })
        } else {
          res.status(404)
          res.send({
            'status': 'missing',
            'data': null
          })
        }
      }, 1000)
    })
  })

  userStateRouter.put('/:id', function (req, res) {
    const userState = req.body.userState

    userStateDB.update({id: req.params.id}, userState, {}, function () {
      res.send({'status': 'ok', 'data': [userState]})
    })
  })

  userStateRouter.delete('/:id', function (req, res) {
    userStateDB.remove({id: req.params.id}, {}, function () {
      res.status(204).end()
    })
  })

  app.use('/api/v1/userState', userStateRouter)
}
