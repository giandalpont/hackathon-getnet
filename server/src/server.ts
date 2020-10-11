import express, { response } from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'run'})
})

app.listen(3030, () => {
  console.log('##### Server started #####')
})

