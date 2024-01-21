import express from 'express'
import { getPayment } from './controllers.js'

const router = express.Router()

router.get('/', getPayment)

export default router
