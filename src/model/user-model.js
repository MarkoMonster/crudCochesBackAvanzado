import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    validate: function (value) {
      const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return mail.test(value)
    },
    message: 'Formato de correo no valido'
  },
  password: String,
  name: String,
  lastName: String,
  rol: {
    type: String,
    enum: ['user', 'admin', 'cliente'],
    default: 'cliente'
  }
})

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export const compairPassword = async (password, receivedPassoword) => {
  return await bcrypt.compare(password, receivedPassoword)
}
const UserModel = mongoose.model('users', UserSchema)
export default UserModel
