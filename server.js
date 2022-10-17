require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./dbConnect')


dbConnect()
app.use(express.json())
app.use(cors())

const port = process.env.port || 5000

app.listen(port, () => console.log(`server initiated on port ${port}`))
