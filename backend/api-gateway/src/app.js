import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { URL } from 'url'

// feature Routes
import mediaRoute from './features/media/routes.js'
import userRoute from './features/user/routes.js'
import courseRoute from './features/course/routes.js'
import orderRoute from './features/order/routes.js'
import paymentRoute from './features/payment/routes.js'

// setup env
dotenv.config()
const __dirname = new URL('.', import.meta.url).pathname
const app = express()

// plugins
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/medias', mediaRoute)
app.use('/users', userRoute)
app.use('/courses', courseRoute)
app.use('/orders', orderRoute)
app.use('/payments', paymentRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server starts at  http://127.0.0.1:${port}`)
})
