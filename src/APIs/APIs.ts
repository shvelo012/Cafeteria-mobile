import { DeviceApi } from "../API/API";

export const APIs = {
  getFoodAPI: `http://${DeviceApi}:4000/food/all`,
  getCredentialsAPI: `http://${DeviceApi}:4000/admin/getcredentials`,
  IsOpenAPI: `http://${DeviceApi}:4000/admin/getIsOpen`,
  IsStoreOpenAPI: `http://${DeviceApi}:4000/admin/setIsOpen`,
  resetQuantityAPI: `http://${DeviceApi}:4000/food/resetQuantity`,
  openStoreAPI: `http://${DeviceApi}:4000/admin/setIsOpen`,
}