const fetch = require('node-fetch');
const log = require('loglevel');
const conseiljs = require('conseiljs');

const logger = log.getLogger('conseiljs');
logger.setLevel('debug', false); // to see only errors, set to 'error'
conseiljs.registerLogger(logger);
conseiljs.registerFetch(fetch);

// Start
const express = require('express')

const tezosNode = '';

const router = new express.Router()

// console.log(entryPoints[0].generateParameter('', '', 999));

router.get('/setAll', (req, res) => {
    
    const body = req.body

    const contractParameters = 'parameter (or (or (pair %addUser (address %new_user) (option %new_user_whitelist nat)) (pair %add_all (pair (nat %TJM) (address %cli)) (pair (string %id) (pair (address %op) (nat %temp))))) (or (address %setAdmin) (string %validateContrat)));'

    const entryPoints = conseiljs.TezosContractIntrospector.generateEntryPointsFromParams(contractParameters);

    //const seAll = entryPoints[1].conseiljs.TezosMessageUtils.generateParameter(200,'tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtK','sc-212','tz1hpwSiB5fx65QC9ccuQ1B499Sv8GRZpfkZ',14);

    res.json({
        success: true,
        entryPoints: entryPoints[1].structure
    })
    
    
})

module.exports = router