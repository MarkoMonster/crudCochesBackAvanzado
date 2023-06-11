const verificar = (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) return res.status(400).json({ message: 'no hay token valedor' })
  next()
  console.log(token)
}
export default verificar
