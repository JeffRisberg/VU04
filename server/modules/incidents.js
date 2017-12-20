const express = require('express')
const elasticsearch = require('elasticsearch')

const incidentsRouter = express.Router()

const bodyParser = require('body-parser')

var client = new elasticsearch.Client({
  host: 'http://localhost:9200/',
  log: 'trace'
})

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  incidentsRouter.use(bodyParser.json())

  incidentsRouter.get('/',
    function (req, res) {
      client.search({
        index: 'incidents',
        body: {
          _source: [ '_id', 'creationTime', 'subject', 'status', 'assignee', 'severity', 'priority' ],
          query: {
            range: {
              'creationTime': {
                gte: '2017-12-01',
                lte: '2017-12-31'
              }
            }
          },
          size: 9999
        }
      }).then(function (resp) {
        const hits = resp.hits.hits;
        const sources = hits.map((hit) => {
          const source = hit._source
          source.id = hit._id
          return source
        })
        res.send({
          'status': 'ok',
          'data': sources
        })
      }, function (err) {
        console.trace(err.message)
      })
    }
  )

  app.use('/api/incidents', incidentsRouter)
}
