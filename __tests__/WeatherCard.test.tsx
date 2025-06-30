import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';

const mockData = {
  name: 'Paris',
  main: { temp: 293.15 },
  weather: [{ main: 'Sunny', icon: '01d' }],
};

describe('WeatherCard', () => {
  it('renders city name, temperature and weather condition correctly', () => {
    const { getByText, getByRole, getByTestId } = render(<WeatherCard data={mockData} />);

    expect(getByText('Paris')).toBeTruthy();

    expect(getByText('20°C')).toBeTruthy();

    expect(getByText('Sunny')).toBeTruthy();

    const icon = getByTestId('weather-icon');
    expect(icon.props.source.uri).toBe('https://openweathermap.org/img/wn/01d@2x.png');
  });
});
