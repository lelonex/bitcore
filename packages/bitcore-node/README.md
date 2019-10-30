# Bitcore Node

**A full node with extended capabilities using Bitcoin Core.**

## Setup Guide

### Example bitcore.config.json

Set up your bitcore.config.json file in ./bitcore

```json
{
  "bitcoreNode": {
    "services": {
      "api": {
        "wallets": {
          "allowCreationBeforeCompleteSync": true
        }
      }
    },
    "chains": {
      "ZCL": {
        "mainnet": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "127.0.0.1",
              "port": 8033 
            }
          ],	
          "rpc": {
            "host": "127.0.0.1",
            "port": 8023,
            "username": "zclassic",
            "password": "zclassic"
          }
        }
      }
    }
  }
}
```

Then start the node

```sh
npm run node
```

## API Documentation

- [REST API parameters and example responses](./docs/api-documentation.md)

- [Websockets API namespaces, event names and parameters](./docs/sockets-api.md)

- [Testing Bitcore-node in RegTest](./docs/wallet-guide.md)

## Contributing

See [CONTRIBUTING.md](../../Contributing.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
