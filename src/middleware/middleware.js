import Jwt from 'jsonwebtoken'
import { SECRET } from '../config/config.js'
import UserModel from '../model/user-model.js'
const verificar = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) return res.status(400).json({ message: '¡Híjole, no hay token!' })
    // JWT verificará el token
    const decoded = Jwt.verify(token, SECRET)
    console.log(decoded.id)

    // Crear una consulta por ID una vez verificado
    const user = await UserModel.findById(decoded.id, { password: 0 })
    if (!user) return res.statur(404).json({ message: 'Uusario no encontrado desde el Middleware' })

    console.log(user)
    next()
  } catch (error) {
    res.json({ message: 'Token no valido' })
  }
}
export default verificar
