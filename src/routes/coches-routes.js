import { Router } from 'express'
import { showCoches, showCoche, addCoche, deleteCoche, deleteCochesV2, updateCoche } from '../controller/coches-controller.js'
import verificar from '../middleware/middleware.js'
const router = Router()

router.get('/', showCoches)
router.get('/showCoche', showCoche)
router.post('/addCoche', verificar, addCoche)
router.delete('/deleteCoche/:id', deleteCoche)
router.delete('/deteCocheV2/:id', deleteCochesV2)
router.patch('/update/:id', updateCoche)
export default router
