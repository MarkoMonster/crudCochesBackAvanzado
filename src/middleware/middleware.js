import Jwt from 'jsonwebtoken'
import { SECRET } from '../config/config.js'
import UserModel from '../model/user-model.js'
const verificar = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) return res.status(400).json({ message: ' Error if: ¡Híjole, no hay token!' })
    // JWT verificará el token
    const decoded = Jwt.verify(token, SECRET)
    // Crear una consulta por ID una vez verificado
    const user = await UserModel.findById(decoded.id, { password: 0 })
    if (!user) return res.status(404).json({ message: 'Usario no encontrado desde el Middleware' })

    next()
  } catch (error) {
    res.json({ message: 'Error catch: Token no valido' })
  }
}
export default verificar
