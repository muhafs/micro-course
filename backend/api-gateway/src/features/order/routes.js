import express from 'express'
import { getOrder } from './controllers.js'

const router = express.Router()

router.get('/', getOrder)

export default router
