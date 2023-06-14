import express from 'express'
import { execute } from './src/config/database-config.js'
import { cochesRoute, makesRoute, usersRoute } from './src/routes/index.js'

const app = express()
app.use(express.json())
app.use(cochesRoute)
app.use(makesRoute)
app.use(usersRoute)
app.set('view engine', 'ejs')
app.set('views', './src/views') // modificar la ruta de las vistas

execute()
app.listen(3000, () => {
  console.log('--------------------------------------------')
  console.log('El servidor está corriendo en localhost:3000')
})
