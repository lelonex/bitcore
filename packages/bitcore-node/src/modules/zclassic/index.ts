import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from '..';
import { ZCLStateProvider } from '../../providers/chain-state/zcl/zcl';

export default class ZCLModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('ZCL', 'zclassic-bitcore-lib', 'zclassic-bitcore-p2p');
    services.P2P.register('ZCL', BitcoinP2PWorker);
    services.CSP.registerService('ZCL', new ZCLStateProvider());
  }
}
