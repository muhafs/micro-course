import express from 'express'
import { getMedia } from './controllers.js'

const router = express.Router()

router.get('/', getMedia)

export default router
