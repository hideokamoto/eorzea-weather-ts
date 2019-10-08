# eorzea weather for TypeScript

Simply utility functions to call the eorzea weather package.

## Usage


```typescript
import EorzeaWeather from 'eorzea-weather-ts'
const client = new EorzeaWeather()

// Regional Search
client.getWeatherBySearchQuery('Thanalan', new Date(), 'en')
[
  {
      "name": "Ul'dah",
      "weather": "Clear Skies",
      "date": "2019-09-08T07:22:34.438Z"
  },
  {
      "name": "Central Thanalan",
      "weather": "Clear Skies",
      "date": "2019-09-08T07:22:34.438Z"
  },
  {
      "name": "Eastern Thanalan",
      "weather": "Clear Skies",
      "date": "2019-09-08T07:22:34.438Z"
  },
  {
      "name": "Northern Thanalan",
      "weather": "Clouds",
      "date": "2019-09-08T07:22:34.438Z"
  },
  {
      "name": "Western Thanalan",
      "weather": "Clear Skies",
      "date": "2019-09-08T07:22:34.438Z"
  }
]

// Zone search
client.getWeatherBySearchQuery("The Rak'tika Greatwood", date))
[{
  "date": "2019-09-08T07:22:34.438Z"
  "name": "The Rak'tika Greatwood",
  "weather": 'Clouds'
}]
```

## Prepare

```
$ git clone YOUR_REPO_URI
$ cd YOUR_REPO_URI

// Put your GitHub Personal Access Token
$ mv .envrc.example .envrc
$ vim .envrc
export CONVENTIONAL_GITHUB_RELEASER_TOKEN=PUT_YOUR_GITHUB_ACCESS_TOKEN

// Install
$ yarn
or
$ npm install
```

## Commit message rule

The repository runs commitlint.
We have to follow "Conventional Commit" to make a commit message.

https://www.conventionalcommits.org/en/v1.0.0-beta.4/

```bash
$ git commit -m "<type>[optional scope]: <description>

[optional body]

[optional footer]"
```

## Contribution

```bash
// clone
$ git clone git@github.com:hideokamoto/eorzea-weather-ts.git
$ cd eorzea-weather-ts

// setup
$ yarn

// Unit test
$ yarn test
or
$ yarn run test:watch

// Lint
$ yarn run lint
or
$ yarn run lint --fix

// Build
$ yarn run build

// Rebuild docs
$ yarn run doc
```

## License

MIT

```
FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
FINAL FANTASY XIV © 2010 - 2019 SQUARE ENIX CO., LTD. All Rights Reserved.
```