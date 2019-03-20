const express = require('express')
const router = express.Router()

require('./routes/transaction')(router)
require('./routes/user')(router)
require('./routes/researchtype')(router)

module.exports = router
