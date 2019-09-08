import moment from 'moment'
import {
  EorzeaWeather
} from '../libs/index'
const client = new EorzeaWeather()
describe('getWeatherByRegion()', () => {
  it('should throw error when given invalid name', () => {
    expect(
      () => client.getWeatherByRegion('John')
    ).toThrow()
  })
  it('should list weathers', () => {
    const weathers = client.getWeatherByRegion('Thanalan', moment('2019-12-01T12:00:00Z').toDate())
    expect(weathers).toMatchObject([{
      date: expect.any(Date),
      name: "Ul'dah",
      weather: 'Fog'
    }, {
      date: expect.any(Date),
      name: 'Central Thanalan',
      weather: 'Fog'
    }, {
      date: expect.any(Date),
      name: 'Eastern Thanalan',
      weather: 'Showers'
    }, {
      date: expect.any(Date),
      name: 'Northern Thanalan',
      weather: 'Fog'
    }, {
      date: expect.any(Date),
      name: 'Western Thanalan',
      weather: 'Fog'
    }])
  })
})

describe('getWeatherByZone()', () => {
  it('Should return the zone weather.', () => {
    const zone = client.getZoneByName("The Rak'tika Greatwood")
    const weather = client.getWeatherByZone(zone, moment('2019-12-01T12:00:00Z').toDate())
    expect(weather).toEqual('Clouds')
  })
})

describe('getRegionZones()', () => {
  it('should list zones by region name[en]', () => {
    expect(client.getRegionZones('Norvrandt', 'en')).toEqual({
      name: 'Norvrandt',
      zones: {
        amhAraeng: 'Amh Araeng',
        eulmore: 'Eulmore',
        ilMheg: 'Il Mheg',
        kholusia: 'Kholusia',
        lakeland: 'Lakeland',
        theCrystarium: 'The Crystarium',
        theRaktikaGreatwood: "The Rak'tika Greatwood",
        theTempest: 'The Tempest'
      }
    })
  })
  it('should list zones by region name[ja]', () => {
    expect(client.getRegionZones('ラノシア', 'ja')).toEqual({
      name: 'ラノシア',
      zones: {
        easternLaNoscea: '東ラノシア',
        limsaLominsa: 'リムサ・ロミンサ',
        lowerLaNoscea: '低地ラノシア',
        middleLaNoscea: '中央ラノシア',
        outerLaNoscea: '外地ラノシア',
        upperLaNoscea: '高地ラノシア',
        westernLaNoscea: '西ラノシア'
      }
    })
  })
})

describe('getZoneByName()', () => {
  it('should throw error when given invalid name', () => {
    expect(
      () => client.getZoneByName('John')
    ).toThrow()
  })
  it('shoudl return code name', () => {
    expect(client.getZoneByName("The Rak'tika Greatwood")).toEqual('theRaktikaGreatwood')
  })
})

describe('getWeatherBySearchQuery()', () => {
  const date = moment('2019-12-01T12:00:00Z').toDate()
  it('should throw error', () => {
    expect(
      () => client.getWeatherBySearchQuery('John', date)
    ).toThrow()
  })
  it('should return the region weathers', () => {
    expect(client.getWeatherBySearchQuery("The Rak'tika Greatwood", date))
      .toEqual([{
        date: expect.any(Date),
        name: "The Rak'tika Greatwood",
        weather: 'Clouds'
      }])
  })
  it('should return the zone weather', () => {
    expect(client.getWeatherBySearchQuery('Thanalan', date, 'en'))
      .toMatchObject([{
        date: expect.any(Date),
        name: "Ul'dah",
        weather: 'Fog'
      }, {
        date: expect.any(Date),
        name: 'Central Thanalan',
        weather: 'Fog'
      }, {
        date: expect.any(Date),
        name: 'Eastern Thanalan',
        weather: 'Showers'
      }, {
        date: expect.any(Date),
        name: 'Northern Thanalan',
        weather: 'Fog'
      }, {
        date: expect.any(Date),
        name: 'Western Thanalan',
        weather: 'Fog'
      }
      ])
  })
})
