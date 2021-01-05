const express = require('express')

const router = new express.Router()

const apiBaseUrl = 'https://api.better-call.dev/v1'

// Fonction réutilisable pour faire des appels à l'API BCD
function fetchBCD (path) {

    return fetch(`${apiBaseUrl}${path}`, {
        method: "GET",
        headers: {
            accept: 'application/json'
        }
    })
    .then(fetchResponse => {
        return fetchResponse.json();
    })
    .then(responseData => {
        const errorCode = responseData.status.error_code
        if (errorCode != 0) {
            throw new Error(responseData.status.error_message)
        }
        return responseData.data
    })
}

router.get('/', function getRoot(req, res) {

    const path = '/contract/delphinet/KT1Wja5vWzUP15fWpAYFdGYHZmBZbtuHzG4H/storage'

    fetchBCD(path)
    .then(storage => {
        res.json({
            success: true,
            storage
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