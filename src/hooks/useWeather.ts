import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setCity,
} from '../redux/weatherSlice';
import { fetchWeatherByCity } from '../services/weatherAPI';
import { RootState } from '../redux/store';

export const useWeather = () => {
  const dispatch = useDispatch();
  const { city, data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const fetchWeather = async (cityName: string) => {
    dispatch(setCity(cityName));
    dispatch(fetchWeatherStart());
    try {
      const result = await fetchWeatherByCity(cityName);
      dispatch(fetchWeatherSuccess(result));
    } catch (err: any) {
      dispatch(fetchWeatherFailure(err.message));
    }
  };

  return {
    city,
    data,
    loading,
    error,
    fetchWeather,
  };
};
