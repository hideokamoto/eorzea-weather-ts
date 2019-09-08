import en from './en'
import ja from './ja'
import {
  Weathers,
  Regions,
  Zones,
  Locale
} from './model'

/**
 * Get weather list by the locale
 * @param {Locale} locale
 */
export const getWeather = (locale: Locale = 'ja'): Weathers => {
  if (locale === 'ja') return ja.weathers
  return en.weathers
}

/**
 * Get region list by the locale
 * @param {Locale} locale
 */
export const getRegions = (locale: Locale = 'ja'): Regions => {
  if (locale === 'ja') return ja.regions
  return en.regions
}

/**
 * Get zone list by the locale
 * @param {Locale} locale
 */
export const getZones = (locale: Locale = 'ja'): Zones => {
  if (locale === 'ja') return ja.zones
  return en.zones
}
