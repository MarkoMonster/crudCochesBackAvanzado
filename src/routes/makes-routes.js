import { showMakes } from '../controller/makes-controller.js'
import { Router } from 'express'
import verificar from '../middleware/middleware.js'

const router = Router()
// router.get('/showMakes', showMakes)
router.get('/showMakes', verificar, showMakes)
export default router
