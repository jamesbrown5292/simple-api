const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const subscribersRouter = require('./routes/subscribers')

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`)
})

app.use(express.json())
app.use('/subscribers', subscribersRouter)
app.get('/', (req, res) => {
    console.log("Hello")
})
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection

db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to Database'))



