const express = require('express')
const { Router } = express
const Event = require('./model')

const router = new Router()

router.post('/event', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
})

router.get('/event', (req, res, next) => {
  Event.findAll()
    .then(events => res.send(events))
    .catch(next)
})

router.get('/event/:id', (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => res.send(event))
    .catch(next)
})

router.put('/event/:id', (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next)
})

router.delete('/event/:id', (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next)
  // .catch(error => next(error))
})

module.exports = router