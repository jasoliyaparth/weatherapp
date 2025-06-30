# React Native Weather App

A simple cross-platform (iOS & Android) Weather App built with React Native and TypeScript.  
The app fetches weather data from the OpenWeatherMap API based on the city name input by the user. It supports light/dark themes with manual toggle and persists the last searched city using Redux Persist with MMKV storage.

---

## Features

- Search for any city and fetch current weather data.
- Displays city name, temperature, weather condition, and icon.
- Handles loading and error states.
- Manual light/dark mode toggle with icons.
- Persistent state using Redux + redux-persist with MMKV storage.
- Unit tests for Redux slice and service.
- Clean folder structure and well-organized code.


## Getting Started

### Prerequisites

- Node.js & Yarn installed
- React Native CLI environment set up ([React Native docs](https://reactnative.dev/docs/environment-setup))

### Installation

1. Clone the repository:

```bash
git clone https://jasoliyaparth@github.com/jasoliyaparth/weatherapp.git
cd react-native-weather-app
```

2. Install dependencies with Yarn:

```bash
yarn install
```

3. Set your OpenWeatherMap API key

replace the placeholder in `src/services/weatherAPI.ts`:

```ts
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
```

---

### Running the app

Run on iOS:

```bash
npx react-native run-ios
```

Run on Android:

```bash
npx react-native run-android
```

---

### Running tests

Run all tests:

```bash
yarn test
```

Run a single test file:

```bash
yarn test weatherSlice.test.ts
```

---

## Architecture and Decisions

- **State management:** Redux Toolkit with slices for weather and theme state.
- **Persistence:** `redux-persist` using `react-native-mmkv` for efficient storage.
- **API integration:** Fetch from OpenWeatherMap with async thunk handling loading and error states.
- **Theming:** Manual light/dark mode toggle with icons, using React Native's `Appearance` API for default mode detection.
- **Testing:** Jest and React Native Testing Library for unit and component tests.
- **Folder structure:**  
  - `src/components` - reusable UI components  
  - `src/screens` - screens  
  - `src/services` - API calls  
  - `src/hooks` - custom hooks  
  - `src/theme` - theme and styling related files

---

## Notes

- The temperature unit is displayed as returned by the API (Kelvin by default).
- The app handles API errors gracefully with user-friendly messages.
- The last searched city is saved and loaded on app restart.
