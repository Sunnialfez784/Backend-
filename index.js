require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello')
})

app.get('/name', (req,res) => {
    res.send('Sunnialfez')
})

app.get('/insta', (req,res) => {
    res.send('Sunnialfez784')
})

app.get('/linkdin', (req,res)=> {
    res.send('<a href="https://www.linkedin.com/in/alfez-sunni-335176371/">Go To Linkdin</a>')
})

app.listen(process.env.PORT, () => {
    console.log(`Express app listening on port ${port}`)
})