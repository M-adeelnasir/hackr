const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const connectDB = require('./dotenvVariables/db')
const routes = fs.readdirSync('./routes')
const app = express()
dotenv.config({ path: "./dotenvVariables/config.env" })

app.use(cookieParser())

app.use(cors())
// app.use(cors({ origin: process.env.CLIENT_URL }))

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}

app.use(express.json())
connectDB()

routes.map((r) => app.use('/api/v1', require('./routes/' + r)));


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`Backend is starting at Port ${PORT}`.cyan))

process.on('unhandledRejection', (err, promise) => {
    console.log("unhandledRejection ERROR ===>", err);
    server.close(() => process.exit(1))
})