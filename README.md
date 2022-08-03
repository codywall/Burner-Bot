# Crypto Burner Bot

A bot which monitors a wallet address and burns any ETH or BNB sent to it, preventing anyone from paying gas fees and withdrawing funds from it.

## Getting Started

### Dependencies

- NodeJS

### Installing

- `npm i`
- Add a `.env` file with these values:
  - `NETWORK_RPC_URL` The RPC URL for the network you are using.
  - `PRIVATE_KEY_ZERO_GAS` The private key of the wallet which you are targeting.

### Executing program

- `npm run start`

## Acknowledgments

This application is largely based off code supplied in a [twitter thread](https://twitter.com/smpalladino/status/1373049027365904389?s=20&t=PE8rsffOnw8PxiKzpl7OdQ) by Santiago Palladino.
