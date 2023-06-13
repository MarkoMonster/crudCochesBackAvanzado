import MakeModel from '../model/make-model.js'

const showMakes = (req, res) => {
  const consulta = MakeModel.find({})

  consulta.exec()
    .then((marcas) => {
      // bres.json(marcas)
      res.render('showMakes', { marcas })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const addMake = (req, res) => {
  const { make, sucursal, contact, address } = req.body

  const makeObj = new MakeModel({ make, sucursal, contact, address })
  makeObj.save()
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const deleteMake = (req, res) => {
  const { id } = req.params

  MakeModel.findByIdAndRemove(id)
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

export { showMakes, addMake, deleteMake }
