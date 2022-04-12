const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const routes = fs.readdirSync('./routes')
const app = express()
dotenv.config({ path: "./dotenvVariables/config.env" })



app.use(cors())

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}

app.use(express.json())


routes.map((r) => app.use('/api/v1', require('./routes/' + r)));


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`Backend is starting at Port ${PORT}`.cyan))

process.on('unhandledRejection', (err, promise) => {
    console.log("unhandledRejection ERROR ===>", err);
    server.close(() => process.exit(1))
})