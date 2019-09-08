// from: https://github.com/flowercartelet/eorzea-weather/blob/master/src/locales/en.json
import {
  Weathers,
  Zones,
  Regions
} from './model'

export const weathers: Weathers = {
  blizzards: 'Blizzards',
  clearSkies: 'Clear Skies',
  clouds: 'Clouds',
  dustStorms: 'Dust Storms',
  fairSkies: 'Fair Skies',
  fog: 'Fog',
  gales: 'Gales',
  gloom: 'Gloom',
  heatWaves: 'Heat Waves',
  rain: 'Rain',
  showers: 'Showers',
  snow: 'Snow',
  thunder: 'Thunder',
  thunderstorms: 'Thunderstorms',
  umbralStatic: 'Umbral Static',
  umbralWind: 'Umbral Wind',
  wind: 'Wind'
}
export const regions: Regions = [
  {
    name: 'La Noscea',
    zones: {
      limsaLominsa: 'Limsa Lominsa',
      lowerLaNoscea: 'Lower La Noscea',
      upperLaNoscea: 'Upper La Noscea',
      easternLaNoscea: 'Eastern La Noscea',
      westernLaNoscea: 'Western La Noscea',
      middleLaNoscea: 'Middle La Noscea',
      outerLaNoscea: 'Outer La Noscea'
    }
  },
  {
    name: 'Black_Shroud',
    zones: {
      centralShroud: 'Central Shroud',
      eastShroud: 'East Shroud',
      northShroud: 'North Shroud',
      southShroud: 'South Shroud',
      gridania: 'Gridania'
    }
  },
  {
    name: 'Thanalan',
    zones: {
      uldah: "Ul'dah",
      centralThanalan: 'Central Thanalan',
      easternThanalan: 'Eastern Thanalan',
      northernThanalan: 'Northern Thanalan',
      westernThanalan: 'Western Thanalan'
    }
  },
  {
    name: 'Ishgard',
    zones: {
      ishgard: 'Ishgard',
      coerthasCentralHighlands: 'Coerthas Central Highlands',
      coerthasWesternHighlands: 'Coerthas Western Highlands',
      theChurningMists: 'The Churning Mists',
      azysLla: 'Azys Lla',
      idyllshire: 'Idyllshire',
      theDravanianForelands: 'The Dravanian Forelands',
      theDravanianHinterlands: 'The Dravanian Hinterlands'
    }
  },
  {
    name: 'Gyr Abania',
    zones: {
      rhalgrsReach: "Rhalgr's Reach",
      theLochs: 'The Lochs',
      thePeaks: 'The Peaks',
      theFringes: 'The Fringes'
    }
  },
  {
    name: 'Hingashi',
    zones: {
      kugane: 'Kugane',
      theRubySea: 'The Ruby Sea',
      theAzimSteppe: 'The Azim Steppe',
      yanxia: 'Yanxia'
    }
  },
  {
    name: 'Norvrandt',
    zones: {
      amhAraeng: 'Amh Araeng',
      eulmore: 'Eulmore',
      ilMheg: 'Il Mheg',
      kholusia: 'Kholusia',
      theCrystarium: 'The Crystarium',
      theTempest: 'The Tempest',
      lakeland: 'Lakeland',
      theRaktikaGreatwood: "The Rak'tika Greatwood"
    }
  },
  {
    name: 'Eureka',
    zones: {
      eurekaAnemos: 'Eureka Anemos',
      eurekaHydatos: 'Eureka Hydatos',
      eurekaPagos: 'Eureka Pagos',
      eurekaPyros: 'Eureka Pyros'
    }
  },
  {
    name: 'Others',
    zones: {
      mist: 'Mist',
      shirogane: 'Shirogane',
      morDhona: 'Mor Dhona',
      theGoblet: 'The Goblet',
      theLavenderBeds: 'The Lavender Beds',
      theDiadem: 'The Diadem'
    }
  }
]

export const zones: Zones = {
  amhAraeng: 'Amh Araeng',
  azysLla: 'Azys Lla',
  centralShroud: 'Central Shroud',
  centralThanalan: 'Central Thanalan',
  coerthasCentralHighlands: 'Coerthas Central Highlands',
  coerthasWesternHighlands: 'Coerthas Western Highlands',
  eastShroud: 'East Shroud',
  easternLaNoscea: 'Eastern La Noscea',
  easternThanalan: 'Eastern Thanalan',
  eulmore: 'Eulmore',
  eurekaAnemos: 'Eureka Anemos',
  eurekaHydatos: 'Eureka Hydatos',
  eurekaPagos: 'Eureka Pagos',
  eurekaPyros: 'Eureka Pyros',
  gridania: 'Gridania',
  idyllshire: 'Idyllshire',
  ilMheg: 'Il Mheg',
  ishgard: 'Ishgard',
  kholusia: 'Kholusia',
  kugane: 'Kugane',
  lakeland: 'Lakeland',
  limsaLominsa: 'Limsa Lominsa',
  lowerLaNoscea: 'Lower La Noscea',
  middleLaNoscea: 'Middle La Noscea',
  mist: 'Mist',
  morDhona: 'Mor Dhona',
  northShroud: 'North Shroud',
  northernThanalan: 'Northern Thanalan',
  outerLaNoscea: 'Outer La Noscea',
  rhalgrsReach: "Rhalgr's Reach",
  shirogane: 'Shirogane',
  southShroud: 'South Shroud',
  southernThanalan: 'Southern Thanalan',
  theAzimSteppe: 'The Azim Steppe',
  theChurningMists: 'The Churning Mists',
  theCrystarium: 'The Crystarium',
  theDiadem: 'The Diadem',
  theDravanianForelands: 'The Dravanian Forelands',
  theDravanianHinterlands: 'The Dravanian Hinterlands',
  theFringes: 'The Fringes',
  theGoblet: 'The Goblet',
  theLavenderBeds: 'The Lavender Beds',
  theLochs: 'The Lochs',
  thePeaks: 'The Peaks',
  theRaktikaGreatwood: "The Rak'tika Greatwood",
  theRubySea: 'The Ruby Sea',
  theSeaOfClouds: 'The Sea of Clouds',
  theTempest: 'The Tempest',
  uldah: "Ul'dah",
  upperLaNoscea: 'Upper La Noscea',
  westernLaNoscea: 'Western La Noscea',
  westernThanalan: 'Western Thanalan',
  yanxia: 'Yanxia'
}

export default {
  weathers,
  regions,
  zones
}
