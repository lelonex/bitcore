const ZclassicLib = require('zclassic-bitcore-lib');
import { AbstractBitcoreLibDeriver } from '../btc';
export class ZclDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = ZclassicLib;
}
