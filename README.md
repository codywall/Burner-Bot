# Crypto Burner Bot

Crypto Burner Bot is a utility that monitors a wallet address and burns any ETH or BNB sent to it, effectively preventing anyone from paying gas fees and withdrawing funds from the target wallet. The primary purpose is to stop a sweeper bot from emptying a compromised wallet.

## Getting Started

### Dependencies

- NodeJS

### Installation

1. Clone the repository or download the source code.
2. Run `npm i` in the root directory of the project to install the required packages.
3. Create a `.env` file in the root directory of the project and add the following values:
   - `NETWORK_RPC_URL`: The RPC URL for the network you are using.
   - `PRIVATE_KEY_ZERO_GAS`: The private key of the wallet you are targeting.

### Executing the Program

- Run `npm run start` in the root directory of the project.

## How it Works

The Crypto Burner Bot listens for new blocks in the blockchain and checks the balance of the target wallet. If there are any funds in the wallet, the bot attempts to burn them by sending a transaction with a gas price higher than the balance divided by 21000 (the gas limit for a simple transfer). This makes it impossible to mine a transaction with enough gas to withdraw the funds.

Here's a high-level overview of the script:

1. Import the necessary libraries and load the environment variables.
2. Set up a connection to the blockchain using the provided RPC URL.
3. Create a wallet object using the provided private key.
4. Define the `burn` function, which:
   - Retrieves the wallet's balance.
   - Calculates the gas price required to burn the funds.
   - Sends a transaction with the calculated gas price to burn the funds.
5. Set up an event listener for new blocks in the blockchain.
6. Call the `burn` function whenever a new block is detected.

## Acknowledgments

This application is largely based on code supplied in a [Twitter thread](https://twitter.com/smpalladino/status/1373049027365904389?s=20&t=PE8rsffOnw8PxiKzpl7OdQ) by Santiago Palladino.
