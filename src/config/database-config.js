import mongoose from 'mongoose'
const URI = 'mongodb+srv://marcofrontend:Drummcore1019@cluster0.rdhisay.mongodb.net/CochesDB'
const options = {
  autoIndex: true,
  serverSelectionTimeoutMS: 5000
}

const execute = () => {
  mongoose.connect(URI, options)
    .then(() => {
      console.log('Conexion Establecida OK, vas, atáscate')
      console.log('--------------------------------------------')
    })
    .catch((error) => { console.error(error) })

  const dataBase = mongoose.connection
  dataBase.on('error', console.error.bind(console, 'Estas chavo, tienes un error en la conexión a MongoDB'))
  dataBase.once('open', () => {
    console.log('Ahhh  perro! ya te conectaste a MongoDB')
  })
}

export { execute }
