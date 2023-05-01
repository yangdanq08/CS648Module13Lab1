import express from 'express'

const router = express.Router()
const app = express()

app.use(express.static('public'))

router.get('/', (req, res) => {
  res.sendFile('index.html')
})

router.get('/about', (req, res) => {
  res.sendFile('about.html', {root: 'public'})
})

app.use(router)
const PORT = 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))