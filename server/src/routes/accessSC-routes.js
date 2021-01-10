const express = require('express')

const conseiljs = require('conseiljs');
const tezosNode = '';

const router = new express.Router()

async function interrogateContract() {
    const contractParameters = 'parameter (or (or (pair %addUser (address %new_user) (option %new_user_whitelist nat)) (pair %add_all (pair (nat %TJM) (address %cli)) (pair (string %id) (pair (address %op) (nat %temp))))) (or (address %setAdmin) (string %validateContrat)));'

    const entryPoints = await conseiljs.TezosContractIntrospector.generateEntryPointsFromAddress(contractParameters);
    
    return entryPoints;
    // console.log(entryPoints[0].generateParameter('', '', 999));
}

router.get('/setAll', (req, res) => {
    
    const body = req.body

    const entryPoints = interrogateContract();

    res.json({
        success: true,
        entryPoints
    })
    
    
})

module.exports = router