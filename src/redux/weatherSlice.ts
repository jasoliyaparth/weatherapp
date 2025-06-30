import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  city: '',
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetWeather: (state) => {
      state.error = '';
      state.loading = false;
    },
  },
});

export const {
  setCity,
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  resetWeather
} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
