import mongoose from 'mongoose'

const MakeSchema = new mongoose.Schema({
  make: String,
  sucursal: String,
  contact: {
    phone: Number,
    email: String
  },
  address: String
}, {
  versionKey: false
})

const MakeModel = mongoose.model('makes', MakeSchema)
export default MakeModel
