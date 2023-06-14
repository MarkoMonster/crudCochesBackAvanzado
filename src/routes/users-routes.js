import { Router } from 'express'
import { addUser, deleteUser, login, showUser, showUsers } from '../controller/users-controller.js'

const router = Router()
router.get('/showUsers', showUsers)
router.get('/showUser', showUser)
router.post('/addUser', addUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/login', login)
export default router
