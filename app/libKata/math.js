const express = require('express')
const router = express.Router()

const mathTest = require('../main')

router.get('/math', (req, res) => {
  res.send(mathTest)
})

module.exports = router
