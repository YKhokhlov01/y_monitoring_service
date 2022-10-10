// Интерфейсы для TS
export interface IAccessToken {
  accessToken: string;
  id?: number | undefined;
}

export interface IDevices {
  id: number;
  name: string;
  comment: string;
  latitude: number;
  longitude: number;
  userId: number;
}

export interface IAccessDevice {
  accessToken: string;
  devices: IDevices[];
}

export interface ISensor {
  id: number;
  name: string;
  comment: string;
  deviceId: number;
}
