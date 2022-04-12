const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const app = express()
dotenv.config({ path: "./dotenvVariables/config.env" })




const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`Backend is starting at Port ${PORT}`.cyan))

process.on('unhandledRejection', (err, promise) => {
    console.log("unhandledRejection ERROR ===>", err);
    server.close(() => process.exit(1))
})