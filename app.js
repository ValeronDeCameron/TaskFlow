const express = require('express')
require('dotenv').config()

const app = express()

app.get('/health', (req, res)=> {
    res.json({status: 'OK'})
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})