const express = require('express')
const fetch = require('node-fetch');

const router = new express.Router()

const apiBaseUrl = 'https://api.better-call.dev/v1'
const addressSC = 'KT1Wja5vWzUP15fWpAYFdGYHZmBZbtuHzG4H'

router.get('/', function getRoot(req, res) {

    const path = '/contract/delphinet/' + addressSC + '/storage'

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(`${apiBaseUrl}${path}`, requestOptions)
    .then(response => response.json())
    .then(storage => {
        res.json({
            success: true,
            storage // organiser les données selon le json
        })
    })
    .catch(error => {
        res.json({
            success: false,
            message: error.message
        })
    })
})

module.exports = router