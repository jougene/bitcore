import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from "..";
import { LTCStateProvider } from "../../providers/chain-state/ltc/ltc";

export default class LitecoinModule extends BaseModule {
  constructor(services: BaseModule["bitcoreServices"]) {
    super(services);
    services.Libs.register('LTC', 'litecore-lib', 'litecore-p2p');
    services.P2P.register('LTC', BitcoinP2PWorker);
    services.CSP.registerService('LTC', new LTCStateProvider());
  }
}

