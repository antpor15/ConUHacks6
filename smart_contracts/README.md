# Smart contracts Hardhat project for ConUHacks VI

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