import { IValidation } from '..';
const ZclassicLib = require('zclassic-bitcore-lib');

export class ZclValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const AddressCash = ZclassicLib.Address;
    // Regular Address: try Zclassic
    return AddressCash.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URICash = ZclassicLib.URI;
    // Bip21 uri
    return URICash.isValid(addressUri);
  }
}
