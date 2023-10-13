import Constants from 'expo-constants';

const inputString = Constants.linkingUri;
const match = inputString.match(/^exp:\/\/(.*):\d+$/);
export const DeviceApi = match?.[1] ?? null;

