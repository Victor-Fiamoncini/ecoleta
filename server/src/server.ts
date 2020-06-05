import './bootstrap'
import express from 'express'
import App from './App'

const { app } = new App({ app: express() })
const { PORT } = process.env

app.listen(PORT, () => console.log(`Server running at ${PORT} 🚀`))
