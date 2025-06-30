import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCity = async (city: string) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to fetch weather data'
    );
  }
};
