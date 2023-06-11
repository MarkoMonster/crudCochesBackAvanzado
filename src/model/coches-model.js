import mongoose from 'mongoose'
const CochesSchema = new mongoose.Schema({
  make: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'makes'
  },
  model: {
    type: String,
    require: true,
    trim: true
  },
  version: String,
  image: String,
  price: String
})

const CochesModel = mongoose.model('coches', CochesSchema)
export default CochesModel
