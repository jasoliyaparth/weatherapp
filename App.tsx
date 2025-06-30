/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import WeatherScreen from './src/screens/WeatherScreen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="default" />
            <WeatherScreen />
          </SafeAreaView>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;


