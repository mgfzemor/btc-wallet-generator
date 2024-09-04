const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

/*
    defining network
    bitcoin - main network
    testnet - test network
*/

const network = bitcoin.networks.testnet

/*
    Hierarchical Deterministic (HD) - derivation path
    main network = `m/49'/0'/0'/0`
    test network = `m/49'/1'/0'/0`
 */
const path = `m/49'/1'/0'/0`

// Creating mnemonic to seed (recover password)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Creating root for HD wallet
let root = bip32.fromSeed(seed, network)

// Creating an account (private and public keys)
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("BTC Address: ", btcAddress);
console.log("PrivateKey: ", node.toWIF());
console.log("Wallet Seed: ", mnemonic);



