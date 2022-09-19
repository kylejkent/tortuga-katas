const express = require('express')
const router = express.Router()

const method = require('./method')

router.get('/', (req, res) => {
  res.send(method)
})

module.exports = router
