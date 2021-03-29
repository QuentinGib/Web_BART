const express = require('express')
const fetch = require('node-fetch');

const router = new express.Router()

const apiBaseUrl = 'https://api.better-call.dev/v1'
const addressSC = 'KT18mRnj6mgs95s8CzPsafvkqhvoiSfbUPN2'

// fonction qui retourne la valeur d'un élément (TJM, temps, client ...) d'un
// contrat spécifique
function findRightValue(complete_storage, id_contrat){
    for(var elmt of complete_storage) {
        if(elmt.name === id_contrat) {
            return elmt.value
        }
    }
    return false
}

router.post('/', function getRoot(req, res) {

    const path = '/contract/florencenet/' + addressSC + '/storage'

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
                TJM: findRightValue(storage[0].children[0].children, body.id),
                ressource: findRightValue(storage[0].children[5].children, body.id),
                time: findRightValue(storage[0].children[6].children, body.id),
                client: findRightValue(storage[0].children[2].children, body.id)
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

// fonction qui retourne les infos des contrats dans
// lesquels est impliqué une ressource ou un client
function findMyContracts (complete_storage, role, pubKey) {
    id_of_contracts_held = []
    stored = undefined
    // Dans 'stored' on cherche tous les clients ou toutes les ressources 
    if(role === 'client') {
        stored = complete_storage.children[2].children
    } else if(role === 'ressource') {
        stored = complete_storage.children[5].children
    } else if(role === 'entreprise') {
        stored = complete_storage.children[4].children
    }
    // Puis on cherche l'id de chaque contrat lui appartenant
    for(var elmnt of stored) {
        if(elmnt.value === pubKey) {
            id_of_contracts_held.push(elmnt.name)
        }
    }
    
    // Puis on cherche les infos de chaque contrat
    contracts_held = []
    for(var contratID of id_of_contracts_held) {
        entreprise = undefined
        if(role === 'client') {
            entreprise = findRightValue(complete_storage.children[5].children, contratID)
        } else if(role === 'ressource') {
            entreprise = findRightValue(complete_storage.children[2].children, contratID) //entreprise employante
        } else if(role === 'entreprise') {
            entreprise = findRightValue(complete_storage.children[2].children, contratID) //client
        }
        contracts_held.push(
            {
                id: contratID,
                TJM: findRightValue(complete_storage.children[0].children, contratID),
                entreprise: entreprise,
                time: findRightValue(complete_storage.children[6].children, contratID)
            }
        )
    }
    return contracts_held
}

router.post('/mycontracts', function getRoot(req, res) {

    const path = '/contract/florencenet/' + addressSC + '/storage'

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
            storage: findMyContracts(storage[0], body.role, body.pubKey)
        })
    })
    .catch(error => {
        res.json({
            success: false,
            message: error.message
        })
    })
})

function isSigned (complete_storage, id, role) {
    if (role == 'client') {
        // cas signature client
        return findRightValue(complete_storage.children[9].children, id) 
    } else {
        // cas signature ressource
        return findRightValue(complete_storage.children[10].children, id) 
    }
}

router.post('/signature', function getRoot(req, res) {

    const path = '/contract/florencenet/' + addressSC + '/storage'

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
            signature: isSigned(storage[0], body.id, body.role)
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