import CochesModel from '../model/coches-model.js'
import MakeModel from '../model/make-model.js'

const showCoches = (req, res) => {
  const consult = CochesModel.find({})

  consult.exec()
    .then((coches) => {
      res.json(coches)
      // res.render('index', { coches })
    })
    .catch((error) => {
      // eslint-disable-next-line quote-props
      res.json({ 'message': error })
    })
}

const showCoche = (req, res) => {
  const consult = CochesModel.find()
    .populate('make')

  consult.exec()
    .then((coches) => {
      res.json(coches)
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const addCoche = async (req, res) => {
  const { make, model, version, price, image } = req.body
  const makeObj = await MakeModel.findById({ _id: make })
  if (!makeObj) return res.status(400).json({ error: 'Uyyyy no mano, lo que viene siendo esa marcar no la tengo registrada' })
  const coche = new CochesModel({ make: makeObj, model, version, price, image })
  coche.save()
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const deleteCoche = (req, res) => {
  const { id } = req.params

  CochesModel.findByIdAndDelete(id)
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const deleteCochesV2 = async (req, res) => {
  const { id } = req.params

  const result = await CochesModel.deleteOne({ _id: id })
  if (result.deletedCount === 1) {
    res.status(200).json({ message: 'objeto eliminado' })
  }
  if (result.deletedCount === 0) {
    res.status(400).json({ message: 'Itemn no encontrado' })
  }
}

const updateCoche = (req, res) => {
  const { id } = req.params
  const { make, model, image, price } = req.body
  const query = CochesModel.findByIdAndUpdate(id, { make, model, image, price })
  query.exec()
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

export { showCoches, showCoche, addCoche, deleteCoche, deleteCochesV2, updateCoche }
