const express = require('express')
const router = express.Router()

require('./routes/researchtype')(router)
require('./routes/transaction')(router)
require('./routes/user')(router)

module.exports = router
