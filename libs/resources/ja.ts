// from: https://github.com/flowercartelet/eorzea-weather/blob/master/src/locales/ja.json
import {
  Weathers,
  Zones,
  Regions
} from './model'
import {
  weathers as ENWeathers
} from './en'

export const weathers: Weathers = {
  blizzards: '吹雪',
  clearSkies: '快晴',
  clouds: '曇り',
  dustStorms: '砂塵',
  fairSkies: '晴れ',
  fog: '霧',
  gales: '暴風',
  gloom: '妖霧',
  heatWaves: '灼熱波',
  rain: '雨',
  showers: '暴雨',
  snow: '雪',
  thunder: '雷',
  thunderstorms: '雷雨',
  umbralStatic: '放電',
  umbralWind: '霊風',
  wind: '風'
}
export const regions: Regions = [{
  name: 'ラノシア',
  zones: {
    limsaLominsa: 'リムサ・ロミンサ',
    lowerLaNoscea: '低地ラノシア',
    upperLaNoscea: '高地ラノシア',
    easternLaNoscea: '東ラノシア',
    westernLaNoscea: '西ラノシア',
    middleLaNoscea: '中央ラノシア',
    outerLaNoscea: '外地ラノシア'
  }
}, {
  name: '黒衣森',
  zones: {
    centralShroud: '黒衣森：中央森林',
    eastShroud: '黒衣森：東部森林',
    northShroud: '黒衣森：北部森林',
    southShroud: '黒衣森：南部森林',
    gridania: 'グリダニア'
  }
}, {
  name: 'ザナラーン',
  zones: {
    uldah: 'ウルダハ',
    centralThanalan: '中央ザナラーン',
    easternThanalan: '東ザナラーン',
    northernThanalan: '北ザナラーン',
    westernThanalan: '西ザナラーン'
  }
}, {
  name: 'イシュガルド',
  zones: {
    ishgard: 'イシュガルド',
    coerthasCentralHighlands: 'クルザス中央高地',
    coerthasWesternHighlands: 'クルザス西部高地',
    theChurningMists: 'ドラヴァニア雲海',
    azysLla: 'アジス・ラー',
    idyllshire: 'イデルシャイア',
    theDravanianForelands: '高地ドラヴァニア',
    theDravanianHinterlands: '低地ドラヴァニア'
  }
}, {
  name: 'ギラバニア',
  zones: {
    rhalgrsReach: 'ラールガーズリーチ',
    theLochs: 'ギラバニア湖畔地帯',
    thePeaks: 'ギラバニア山岳地帯',
    theFringes: 'ギラバニア辺境地帯'
  }
}, {
  name: '東方地域',
  zones: {
    kugane: 'クガネ',
    theRubySea: '紅玉海',
    theAzimSteppe: 'アジムステップ',
    yanxia: 'ヤンサ'
  }
}, {
  name: 'ノルヴラント',
  zones: {
    amhAraeng: 'アム・アレーン',
    eulmore: 'ユールモア',
    ilMheg: '妖精郷イル・メグ',
    kholusia: 'コルシア島',
    theCrystarium: 'クリスタリウム',
    theTempest: 'テンペスト',
    lakeland: 'レイクランド',
    theRaktikaGreatwood: 'ラケティカ大森林'
  }
}, {
  name: 'エウレカ',
  zones: {
    eurekaAnemos: 'エウレカ：アネモス帯',
    eurekaHydatos: 'エウレカ：ヒュダトス帯',
    eurekaPagos: 'エウレカ：パゴス帯',
    eurekaPyros: 'エウレカ：ピューロス帯'
  }
}, {
  name: 'その他',
  zones: {
    mist: 'ミスト・ヴィレッジ',
    shirogane: 'シロガネ',
    morDhona: 'モードゥナ',
    theGoblet: 'ゴブレットビュート',
    theLavenderBeds: 'ラベンダーベッド',
    theDiadem: 'ディアデム諸島'
  }
}
]
export const zones: Zones = {
  amhAraeng: 'アム・アレーン',
  azysLla: 'アジス・ラー',
  centralShroud: '黒衣森：中央森林',
  centralThanalan: '中央ザナラーン',
  coerthasCentralHighlands: 'クルザス中央高地',
  coerthasWesternHighlands: 'クルザス西部高地',
  eastShroud: '黒衣森：東部森林',
  easternLaNoscea: '東ラノシア',
  easternThanalan: '東ザナラーン',
  eulmore: 'ユールモア',
  eurekaAnemos: 'エウレカ：アネモス帯',
  eurekaHydatos: 'エウレカ：ヒュダトス帯',
  eurekaPagos: 'エウレカ：パゴス帯',
  eurekaPyros: 'エウレカ：ピューロス帯',
  gridania: 'グリダニア',
  idyllshire: 'イデルシャイア',
  ilMheg: '妖精郷イル・メグ',
  ishgard: 'イシュガルド',
  kholusia: 'コルシア島',
  kugane: 'クガネ',
  lakeland: 'レイクランド',
  limsaLominsa: 'リムサ・ロミンサ',
  lowerLaNoscea: '低地ラノシア',
  middleLaNoscea: '中央ラノシア',
  mist: 'ミスト・ヴィレッジ',
  morDhona: 'モードゥナ',
  northernThanalan: '北ザナラーン',
  northShroud: '黒衣森：北部森林',
  outerLaNoscea: '外地ラノシア',
  rhalgrsReach: 'ラールガーズリーチ',
  shirogane: 'シロガネ',
  southShroud: '黒衣森：南部森林',
  southernThanalan: '南ザナラーン',
  theAzimSteppe: 'アジムステップ',
  theChurningMists: 'ドラヴァニア雲海',
  theCrystarium: 'クリスタリウム',
  theDiadem: 'ディアデム諸島',
  theDravanianForelands: '高地ドラヴァニア',
  theDravanianHinterlands: '低地ドラヴァニア',
  theFringes: 'ギラバニア辺境地帯',
  theGoblet: 'ゴブレットビュート',
  theLavenderBeds: 'ラベンダーベッド',
  theLochs: 'ギラバニア湖畔地帯',
  thePeaks: 'ギラバニア山岳地帯',
  theRaktikaGreatwood: 'ラケティカ大森林',
  theRubySea: '紅玉海',
  theSeaOfClouds: 'アバラシア雲海',
  theTempest: 'テンペスト',
  uldah: 'ウルダハ',
  upperLaNoscea: '高地ラノシア',
  westernLaNoscea: '西ラノシア',
  westernThanalan: '西ザナラーン',
  yanxia: 'ヤンサ'
}

/**
 * 日本語に翻訳する
 * @param weather
 */
export const translateWeather = (weather: string): string => {
  const target = Object.keys(ENWeathers).find(key => {
    const enWeather = ENWeathers[key]
    return enWeather === weather
  })
  if (!target) throw new Error(`Invalid weather name: ${weather}`)
  const jpWeather = weathers[target]
  if (!jpWeather) throw new Error(`Invalid weather name: ${weather}`)
  return jpWeather
}
export default {
  regions,
  translateWeather,
  weathers,
  zones
}
