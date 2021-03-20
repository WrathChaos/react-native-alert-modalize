<img alt="React Native Alert Modalzie" src="assets/logo.png" width="1050"/>

<!--
[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-alert-modalize) -->

[![Awesome styled, fully customizable alert modalize for React Native.](https://img.shields.io/badge/-Awesome%20styled%2C%20fully%20customizable%20alert%20modalize%20for%20React%20Native.-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-alert-modalize)

[![npm version](https://img.shields.io/npm/v/react-native-alert-modalize.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-alert-modalize)
[![npm](https://img.shields.io/npm/dt/react-native-alert-modalize.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-alert-modalize)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Alert Modalize"
        src="assets/Screenshots/razor.png" width="49%" />
<img alt="React Native Alert Modalize"
        src="assets/Screenshots/xmas.png" width="49%"  />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-alert-modalize
```

## Peer Dependencies

###### IMPORTANT! You need install them

```jsx
"react-native-modalize": ">= 1.2.3",
"react-native-gesture-handler": ">= 1.5.2",
"react-native-material-ripple": ">= 0.9.1"
```

# Usage

## Import

```js
import AlertModalize from "react-native-alert-modalize";
```

## Usage

```jsx
<AlertModalize ref={ref => (alertModal = ref)} />
```

#### Open Modal

```js
onPress={() => alertModal.openModal()}
```

#### Close Modal

```js
onPress={() => alertModal.closeModal()}
```

# Configuration - Props

| Property              |    Type     |    Default    | Description                                                      |
| --------------------- | :---------: | :-----------: | ---------------------------------------------------------------- |
| title                 |   string    |     title     | change the title                                                 |
| description           |   string    |  description  | change the description                                           |
| buttonText            |   string    |  button text  | change the button text                                           |
| titleStyle            |    style    | default style | set your own style for title text                                |
| descStyle             |    style    | default style | set your own style for description text                          |
| buttonTextStyle       |    style    | default style | set your own style for button text                               |
| imageSource           |   source    |    source     | set your own image source rather than beautiful Razor :)         |
| imageBackgroundSource |   source    |    source     | set your own image source rather Fortnite's orange background :) |
| titleTextColor        |    color    |     white     | change the title's text color                                    |
| descTextColor         |    color    |     white     | change the description's text color                              |
| buttonTextColor       |    color    |     white     | change the button's text color                                   |
| titleFontFamily       | Font Family |    default    | change the title's font family                                   |
| descFontFamily        | Font Family |    default    | change the description's font family                             |
| buttonFontFamily      | Font Family |    default    | change the button's text font family                             |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Battle Test

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Alert Modalzie is available under the MIT license. See the LICENSE file for more info.
