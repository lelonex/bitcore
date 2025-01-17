module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  ZCL: {
    lib: require('zclassic-bitcore-lib'),
    p2p: require('zclassic-bitcore-p2p'),
  }
}
