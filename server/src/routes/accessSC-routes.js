const fetch = require('node-fetch');
const log = require('loglevel');
const conseiljs = require('conseiljs');
const conseiljssoftsigner = require('conseiljs-softsigner');

const logger = log.getLogger('conseiljs');
logger.setLevel('debug', false); // to see only errors, set to 'error'
conseiljs.registerLogger(logger);
conseiljs.registerFetch(fetch);

const express = require('express')

const tezosNode = 'https://tezos-dev.cryptonomic-infra.tech:443';
const contractAddress = 'KT1PqPiyWLXZQNyAkYcgWsJXX6zTmopGkCmf'

const router = new express.Router()

router.post('/setAll', (req, res) => {
    
    const body = req.body

    const contractParameters = '(Left (Right (Left (Pair (Pair ' + body.TJM + ' "'
        + body.client + '") (Pair "' + body.id + '" (Pair "' + body.ressource + '" ' + body.time + '))))))';

    // const entryPoints = conseiljs.TezosContractIntrospector.generateEntryPointsFromParams(contractParameters);
    // const seAll = entryPoints[1].conseiljs.TezosMessageUtils.generateParameter(200,'tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtK','sc-212','tz1hpwSiB5fx65QC9ccuQ1B499Sv8GRZpfkZ',14);

    /* const keystore = {
        publicKey: 'edpkupYzFULZmAUEfhFae8sgnbP3icZf3eoEBh9AR8qd1kMiyLtMqu',
        privateKey: 'edskRxJUMvC45xZcxSgAP7cajzFB86BzyT2CWrVMvzA2ihaoahirxTU4NVJFSvFcjohPC9X97w5hueM6hqZWiLZAm3mY9CxVK9',
        publicKeyHash: 'tz1YfWQzfJLHm7gFZZUWKWFV53JNaofoJHSK',
        seed: '',
        storeType: conseiljs.KeyStoreType.Fundraiser
    }; */

    async function invokeContract() {
        const keyStore = await conseiljssoftsigner.KeyStoreUtils.restoreIdentityFromSecretKey(body.privateKey);
        const signer = await conseiljssoftsigner.SoftSigner.createSigner(conseiljs.TezosMessageUtils.writeKeyWithHint(keyStore.secretKey, 'edsk'));
        const result = await conseiljs.TezosNodeWriter.sendContractInvocationOperation(tezosNode, signer, keyStore, contractAddress, 0, 100000, 1000, 100000, '', contractParameters, conseiljs.TezosParameterFormat.Michelson);
        // const result = await conseiljs.TezosNodeWriter.sendContractPing(tezosNode, keystore, "KT1QccH45jTEZzyNwSHqR3yMwu2VpMpzALUe", 100000, '', 1000, 100000);
        res.json({
            success : result.results.contents[0].metadata.operation_result.status,
            resultID : result.operationGroupID
        })
    }

    invokeContract()
    
})

router.post('/validate', (req, res) => {
    
    const body = req.body

    const contractParameters = '(Right (Right (Right "' + body.id + '")))'

    async function invokeContract() {
        const keyStore = await conseiljssoftsigner.KeyStoreUtils.restoreIdentityFromSecretKey(body.privateKey);
        const signer = await conseiljssoftsigner.SoftSigner.createSigner(conseiljs.TezosMessageUtils.writeKeyWithHint(keyStore.secretKey, 'edsk'));
        const result = await conseiljs.TezosNodeWriter.sendContractInvocationOperation(tezosNode, signer, keyStore, contractAddress, 0, 100000, 1000, 100000, '', contractParameters, conseiljs.TezosParameterFormat.Michelson);
        res.json({
            success : result.results.contents[0].metadata.operation_result.status,
            resultID : result.operationGroupID
        })
    }

    invokeContract()
    
})

module.exports = router