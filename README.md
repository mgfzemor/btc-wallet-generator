# :closed_lock_with_key: Bitcoin Testnet HD Wallet Generator

This project generates a Bitcoin wallet on the **Testnet** network using Hierarchical Deterministic (HD) derivation and a mnemonic seed phrase. It leverages the `bip32`, `bip39`, and `bitcoinjs-lib` libraries to create a wallet with a public address and private key.

## Features
- Generates a 12-word mnemonic (seed phrase) for wallet recovery.
- Creates an HD wallet using the Testnet network.
- Derives the first account's public address and private key from the seed.
- Outputs the Bitcoin Testnet address, private key (in WIF format), and the mnemonic seed.
- 
## Requirements

- Node.js (v12 or higher)
- npm (Node package manager)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mgfzemor/btc-wallet-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd btc-wallet-generator
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
## Usage
1. Run the script to generate a Bitcoin Testnet wallet:
   ```bash
   node src/createWallet.js
   ```
2. The output will display the generated Bitcoin Testnet address, the private key (in WIF format), and the mnemonic seed phrase:
   ```yaml
   BTC Address:  <your-testnet-address>
   PrivateKey:  <your-private-key-in-WIF-format>
   Wallet Seed:  <your-12-word-mnemonic-seed-phrase>
   ```
## Example Output
   ```yaml
   BTC Address:  mj6vNeyoHaBVmVoz23MeK5bKp1EF6ysYnd
   PrivateKey:  cMyDLmfVyrxonNFzCTGFAjLGVK6weiebzG22ek3qLauzqHxJbUUt
   Wallet Seed:  canoe horse blur dizzy embrace tomato core wool chimney wall autumn other
   ```

## ☕ Buy Me a Coffee
If you found this project useful, feel free to buy me a coffee by sending Bitcoin to my address:

**BTC Address:** `1PuCj9CQgaPdWPtBcNWtKQHYgjpWdGe7rG`

Thanks for the support!


