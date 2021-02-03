const express = require('express')
const fetch = require('node-fetch');

const router = new express.Router()

const apiBaseUrl = 'https://api.better-call.dev/v1'
const addressSC = 'KT1PqPiyWLXZQNyAkYcgWsJXX6zTmopGkCmf'

function findRightValue(complete_storage, id_contrat){
    for(var elmt of complete_storage) {
        if(elmt.name === id_contrat) {
            return elmt.value
        }
    }
    return false
}

router.post('/', function getRoot(req, res) {

    const path = '/contract/delphinet/' + addressSC + '/storage'

    const body = req.body

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(`${apiBaseUrl}${path}`, requestOptions)
    .then(response => response.json())
    .then(storage => {
        res.json({
            success: true,
            storage: {
                TJM: findRightValue(storage.children[0].children, body.id),
                ressource: findRightValue(storage.children[6].children, body.id),
                time: findRightValue(storage.children[7].children, body.id)
            }
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