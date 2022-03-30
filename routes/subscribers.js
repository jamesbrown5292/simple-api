const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//Get all subs
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get one sub
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//Create one sub
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Update one sub
router.patch('/:id', (req, res) => {

})

//Delete one sub
router.delete('/:id', (req, res) => {

})

module.exports = router