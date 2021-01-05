const fetch = require('isomorphic-fetch')
const express = require('express')

const infosSCRoutes = require('./infosSC-routes.js')

const router = new express.Router()

router.use('/infosSC', infosSCRoutes)

module.exports = router