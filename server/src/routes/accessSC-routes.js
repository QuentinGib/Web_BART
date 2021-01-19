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

const router = new express.Router()

// console.log(entryPoints[0].generateParameter('', '', 999));

router.get('/setAll', (req, res) => {
    
    const body = req.body

    const contractParameters = 'parameter (pair (pair (nat %TJM) (address %cli)) (pair (string %id) (pair (address %op) (nat %temp))));'
    const contractAddress = 'KT1QccH45jTEZzyNwSHqR3yMwu2VpMpzALUe'

    const entryPoints = conseiljs.TezosContractIntrospector.generateEntryPointsFromParams(contractParameters);

    //const seAll = entryPoints[1].conseiljs.TezosMessageUtils.generateParameter(200,'tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtK','sc-212','tz1hpwSiB5fx65QC9ccuQ1B499Sv8GRZpfkZ',14);

    /* const faucetAccount = {
        "mnemonic": [ "biology", "sock", "donkey", "chase", "need", "deny", "space", "clock", "waste", "iron", "try", "make", "salmon", "kit", "slush"],
        "secret": "de7edaf49877ed5cb4bec810ba898ec3bf56a50a",
        "amount": "18157993464",
        "pkh": "tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtK",
        "password": "4nZDzLS2Kc",
        "email": "evxpxqaw.wjyiuwnf@tezos.example.org"
    } */

    const keystore = {
        publicKey: 'edpkupYzFULZmAUEfhFae8sgnbP3icZf3eoEBh9AR8qd1kMiyLtMqu',
        privateKey: 'edskRxJUMvC45xZcxSgAP7cajzFB86BzyT2CWrVMvzA2ihaoahirxTU4NVJFSvFcjohPC9X97w5hueM6hqZWiLZAm3mY9CxVK9',
        publicKeyHash: 'tz1YfWQzfJLHm7gFZZUWKWFV53JNaofoJHSK',
        seed: '',
        storeType: conseiljs.KeyStoreType.Fundraiser
    };

    // const keyStore = conseiljssoftsigner.KeyStoreUtils.restoreIdentityFromSecretKey('edskSACXP273g1JA9VxTTVqi6mN725DUCe67D2KkYhF38SkG2Wgvr3ZExaTVyvgKdpBaGBeoVNURGgK59VAFuMcUP2NPE5ZBfF');
    async function invokeContract() {
        const signer = await conseiljssoftsigner.SoftSigner.createSigner(conseiljs.TezosMessageUtils.writeKeyWithHint(keystore.privateKey, 'edsk'));
        const result = await conseiljs.TezosNodeWriter.sendContractInvocationOperation(tezosNode, signer, keystore, contractAddress, 0, 100000, 1000, 100000, '', '(Pair (Pair 300 "tz1ePT7nRT9ANnjzcdbREJHWmfEBJnS7rWtK") (Pair "SCfromConseiljs" (Pair "tz1hpwSiB5fx65QC9ccuQ1B499Sv8GRZpfkZ" 22)))', conseiljs.TezosParameterFormat.Michelson);
        // const result = await conseiljs.TezosNodeWriter.sendContractPing(tezosNode, keystore, "KT1QccH45jTEZzyNwSHqR3yMwu2VpMpzALUe", 100000, '', 1000, 100000);
        return result
    }
    const result = invokeContract()
    res.json({
        success: true,
        result
    })
    
    
})

module.exports = router