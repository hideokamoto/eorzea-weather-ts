export interface Weather {
  [key: string]: string;
}
export type Weathers = Readonly<Weather>

export interface Region {
  name: string;
  zones: {
    [key: string]: string;
  };
}
export type Regions = Readonly<Region[]>

export interface Zone {
  [key: string]: string;
}
export type Zones = Readonly<Zone>

export type Locale = 'en' | 'ja'
