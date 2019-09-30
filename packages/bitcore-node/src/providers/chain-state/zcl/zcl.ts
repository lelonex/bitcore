import { InternalStateProvider } from "../internal/internal";

export class ZCLStateProvider extends InternalStateProvider{
  constructor(chain: string = 'ZCL') {
    super(chain);
  }
}
