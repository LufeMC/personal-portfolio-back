// Main imports
import express from 'express'

const router = express.Router() // Configuring this file as a router (manager of the URL extensions)

router.use('/projects', require('./projects')) // Configuring the extension "/stripe" to run according to the file stripe.ts
router.use('/request', require('./requests')) // Configuring the extension "/stripe" to run according to the file stripe.ts
router.use('/user', require('./user')) // Configuring the extension "/stripe" to run according to the file stripe.ts

module.exports = router