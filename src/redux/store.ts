import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './weatherSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import reduxStorage from './reduxStorage';


const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['weather'],
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
