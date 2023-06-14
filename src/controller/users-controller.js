import UserModel, { compairPassword, encryptPassword } from '../model/user-model.js'

const showUsers = (req, res) => {
  const consult = UserModel.find({})

  consult.exec()
    .then((usuarios) => {
      res.json(usuarios)
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const showUser = (req, res) => {
  const consult = UserModel.find()
  consult.exec()
    .then((users) => {
      res.json(users)
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const addUser = async (req, res) => {
  const { userName, email, password, name, lastName, rol } = req.body
  const userObj = new UserModel({
    userName,
    email,
    password: await encryptPassword(password),
    name,
    lastName,
    rol
  })
  userObj.save()
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const deleteUser = (req, res) => {
  const { id } = req.params

  UserModel.findByIdAndRemove(id)
    .then((result) => {
      res.json({ message: result })
    })
    .catch((error) => {
      res.json({ message: error })
    })
}

const login = async (req, res) => {
  // buscar usuario en la BD
  const userFound = await UserModel.findOne({ email: req.body.email })
  if (!userFound) return res.status(401).json({ message: 'Usuario no encontrado' })

  // comparar el password
  const passwordCompare = await compairPassword(req.body.password, userFound.password)
  console.log('retornó: ' + passwordCompare)
  if (!passwordCompare) return res.status(401).json({ message: 'invalid password' })

  res.json({ message: `Ahhh perro, login éxitoso. Bienvenido ${userFound.name}` })
}

export { showUsers, showUser, addUser, deleteUser, login }
