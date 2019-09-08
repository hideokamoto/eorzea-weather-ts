import {
  getRegions,
  getZones
} from './resources/index'
import {
  Region,
  Locale
} from './resources/model'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Libs = require('eorzea-weather')

export interface WeatherReport {
  name: string;
  weather: string;
  date: Date;
}

export class EorzeaWeather {
  private getWeather: Function
  constructor (getWeather: Function = Libs.getWeather) {
    this.getWeather = getWeather
  }

  /**
   *
   * @param {string} name ゾーン名: Thanalan / 低地ラノシア / etc...
   * @param {Locale = 'en'} locale  言語： ja or en
   * @example
   * ```
   * console.log(getZoneByName('東ラノシア'))
   * ```
   */
  public getZoneByName (name: string, locale: Locale = 'en'): string {
    const zones = getZones(locale)
    const zone = Object.keys(zones).find(key => {
      const zoneName = zones[key]
      if (!zoneName) return false
      return zoneName === name
    })
    if (!zone) throw new Error(`No such zone: ${name}`)
    return zone
  }

  /**
   * Get the specific zone's weather
   * @param {string} zoneName Zone name: Thanalan / 低地ラノシア / etc...
   * @param {Date} date Target date time
   */
  public getWeatherByZone (zoneName: string, date = new Date()): string {
    return this.getWeather(zoneName, date)
  }

  /**
   * Get the specific zones by region
   * @param {string} regionName
   * @param {Locale = 'en'} locale  言語： ja or en
   */
  public getRegionZones (regionName: string, locale: Locale = 'en'): Region {
    const regions = getRegions(locale)
    const region = regions.find(data => data.name === regionName)
    if (!region) throw new Error(`No such region: ${regionName}`)
    return region
  }

  /**
   * Get the regions weathers
   * @param {string} regionName region name like Thanalan
   * @param {Date} date
   * @param {Locale = 'en'} locale  言語： ja or en
   * @example
   * ```
   * [ { name: 'ウルダハ',
   *  weather: 'Clouds',
   *  date: 2019-09-07T15:03:57.143Z },
   * { name: '中央ザナラーン',
   *  weather: 'Clouds',
   *  date: 2019-09-07T15:03:57.143Z },
   * { name: '東ザナラーン',
   *  weather: 'Fog',
   *  date: 2019-09-07T15:03:57.143Z },
   * { name: '北ザナラーン',
   *  weather: 'Fog',
   *  date: 2019-09-07T15:03:57.143Z },
   * { name: '西ザナラーン',
   *  weather: 'Clouds',
   *  date: 2019-09-07T15:03:57.143Z } ]
   *  ```
   */
  public getWeatherByRegion (regionName: string, date = new Date(), loc: Locale = 'en'): WeatherReport[] {
    const target = this.getRegionZones(regionName, loc)
    const results: WeatherReport[] = []
    Object.keys(target.zones).forEach(key => {
      const zoneName = target.zones[key]
      const locale = this.getZoneByName(zoneName, loc)
      results.push({
        name: zoneName,
        weather: this.getWeather(locale, date),
        date
      })
    })
    return results
  }

  /**
   *
   * @param {string} regionOrZone region name like Thanalan, or zone name like  Ul'dah
   * @param {Date} date
   * @param {Locale = 'en'} locale  言語： ja or en
   */
  public getWeatherBySearchQuery (regionOrZone: string, date = new Date(), loc: Locale = 'en') {
    try {
      return this.getWeatherByRegion(regionOrZone, date, loc)
    } catch (e) {
      const locale = this.getZoneByName(regionOrZone, loc)
      return [{
        name: regionOrZone,
        weather: this.getWeather(locale, date),
        date
      }]
    }
  }
}

export default EorzeaWeather
