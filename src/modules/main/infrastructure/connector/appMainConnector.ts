import { DaoAppMainRepository } from "../repository/appMainRepository";

export class DaoDropshippingConnector {
  public async setShutdownAPI(data: any) {
    const daoAppMainRepository = new DaoAppMainRepository();
    return daoAppMainRepository.setShutdownAPI(data);
  }
}
