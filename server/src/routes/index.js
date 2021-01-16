const fetchiso = require('isomorphic-fetch')
const express = require('express')

const infosSCRoutes = require('./infosSC-routes.js')
const accessSCRoutes = require('./accessSC-routes.js')

const router = new express.Router()

router.use('/infosSC', infosSCRoutes)
router.use('/accessSC', accessSCRoutes)

module.exports = router