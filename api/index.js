const express = require('express')
const app = express()
const mongoDBconnection = require('./db')
const cors = require('cors')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const movieRoute = require('./routes/movie')
const listRoute= require('./routes/list')

// MIDDLE-WARES 
app.use(express.json())
app.use(cors())

// All Routes
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/movie', movieRoute)
app.use('/api/lists', listRoute)


app.listen(8800,()=>{
    console.log('Backend server is running successfully')
})