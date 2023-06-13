import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  mail: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  profileImage: String
})

const UserModel = mongoose.model('users', UserSchema)
export default UserModel
