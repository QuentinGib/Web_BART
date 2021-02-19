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
const contractAddress = 'KT1Ju8yvVkrKW9v8xcFUtTrMq3ANmDormgnt'

const router = new express.Router()

router.get('/setAll', (req, res) => {
    
    const body = req.body

    const contractParameters = '(Left (Right (Left (Pair (Pair 200 "tz1YfWQzfJLHm7gFZZUWKWFV53JNaofoJHSK") (Pair "test19-02" (Pair "tz1YfWQzfJLHm7gFZZUWKWFV53JNaofoJHSK" 30))))))'

    // const entryPoints = conseiljs.TezosContractIntrospector.generateEntryPointsFromParams(contractParameters);

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
        const result = await conseiljs.TezosNodeWriter.sendContractInvocationOperation(tezosNode, signer, keystore, contractAddress, 0, 100000, 1000, 100000, '', contractParameters, conseiljs.TezosParameterFormat.Michelson);
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
        const result = await conseiljs.TezosNodeWriter.sendContractInvocationOperation(tezosNode, signer, keystore, contractAddress, 0, 100000, 1000, 100000, '', contractParameters, conseiljs.TezosParameterFormat.Michelson);
        // const result = await conseiljs.TezosNodeWriter.sendContractPing(tezosNode, keystore, "KT1QccH45jTEZzyNwSHqR3yMwu2VpMpzALUe", 100000, '', 1000, 100000);
        res.json({
            success : result.results.contents[0].metadata.operation_result.status,
            resultID : result.operationGroupID
        })
    }

    invokeContract()
    
})

module.exports = router