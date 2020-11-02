import express from 'express'

const app = express()

app.get('/api/fruit', (req, res) => {
    res.end('Orange')
})