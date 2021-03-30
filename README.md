<!-- mind you open an issue... 😀 -->

[![panic-button](https://res.cloudinary.com/ddjsyskef/image/upload/v1616933943/Github/meqqdwjo4orbrsm98sra.jpg)](#)

# `Panic-Button`

[![Ask me anything](https://img.shields.io/badge/ask%20me-anything-orange)][ama]

## Contents

- [Installation](#cloud-installation)
- [Usage](#interrobang-usage)
- [Documentation](#books-documentation)
- [How to contribute](#yum-how-to-contribute)
- [License](#yum-how-to-contribute)

## :cloud: Installation

```js
git clone https://github.com/ekaone/panic-button.git
cd panic-button
npm install
npm run dev
```

## :interrobang: Usage

> NOTE: You must enable (allowing) your location access in your browser.

Press the button and **hold** around `1 second`, it will send the data includes coordinates latitude, longitude and local time to telegram groups or your channel through REST API.

:rocket: [Demo](https://panic-button-eka.vercel.app/)

## :books: Documentation

Make sure setup a Telegram Bot with [`@BotFather`](https://t.me/botfather) and create a new one `@your_group` or `@your_channel`, also invite your `Bot` that you have created before to your `group` or your `channel`, once you have setup BOT Token and group or channel, there are 2 options:

- Drop to `.env.local` (change .env.example) and use it as `process.env.NEXT_PUBLIC_BOT_TOKEN` and `process.env.NEXT_PUBLIC_GROUP/CHANNEL` at the [`url component`](https://github.com/ekaone/panic-button/blob/main/components/button.tsx)
- Use local storage at setting menu as this [demo](https://panic-button-eka.vercel.app/)

Checkout documentation [Telegram API](https://core.telegram.org/bots/api) for more details.

## :yum: How to contribute

Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Eka Prasetia][website]

[website]: https://www.ekaprasetia.com/
[contributing]: https://github.com/ekaone/contribute
[license]: https://en.wikipedia.org/wiki/MIT_License
[ama]: https://github.com/ekaone/ama
