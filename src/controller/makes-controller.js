import MakeModel from '../model/make-model.js'

const showMakes = (req, res) => {
  const consulta = MakeModel.find({})

  consulta.exec()
    .then((marcas) => {
      // res.json(marcas)
      res.render('showMakes', { marcas })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

export { showMakes }
