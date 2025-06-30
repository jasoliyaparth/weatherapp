import { fetchWeatherByCity } from '../src/services/weatherAPI';
import fetchMock from 'jest-fetch-mock';

describe('WeatherService', () => {
  beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetchMock.resetMocks();
});
  it('fetches weather data successfully', async () => {
    const mockResponse = {
      name: 'London',
      main: { temp: 280 },
      weather: [{ main: 'Cloudy', icon: '04d' }],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const data = await fetchWeatherByCity('London');
    expect(data.name).toBe('London');
    expect(data.main.temp).toBe(280);
    expect(data.weather[0].main).toBe('Cloudy');
  });

  it('throws an error if city is not found', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ cod: '404', message: 'city not found' }), { status: 404 });

    await expect(fetchWeatherByCity('InvalidCity')).rejects.toThrow('city not found');
  });
});
