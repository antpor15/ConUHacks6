# ConUHacks6

Welcome to our repo! This is a decentralized funding and voting platform, with a Star Wars theme!

## Smart contract
### Hardhat project for ConUHacks VI

To start a local network at http://localhost:8545:
```shell
npx hardhat node
```

To compile contract:
```bash
npx hardhat compile
```

To deploy to the local network:
```shell
npx hardhat run scripts/deploy.js --network localhost
```

To interact with the network:
```bash
npx hardhat console --network localhost
```

To deploy to Ropsten (with the proper `env` variables):
```bash
npx hardhat run scripts/deployRopsten.js --network ropsten
```