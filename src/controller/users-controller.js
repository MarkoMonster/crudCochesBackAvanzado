import UserModel from '../model/user-model.js'

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

const addUser = (req, res) => {
  const { user, mail, password, profileImage } = req.body
  const userObj = new UserModel({ user, mail, password, profileImage })
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

export { showUsers, showUser, addUser, deleteUser }
