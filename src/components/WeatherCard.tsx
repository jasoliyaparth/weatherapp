import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  data: any;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const {
    name,
    main: { temp },
    weather,
  } = data;

  const condition = weather[0].main;
  const icon = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const temperatureCelsius = Math.round(temp - 273.15);

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{name}</Text>
      <Image testID="weather-icon" source={{ uri: iconUrl }} style={styles.icon} resizeMode='contain' />
      <Text style={styles.temp}>{temperatureCelsius}°C</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  condition: {
    fontSize: 20,
    color: '#666',
    marginTop: 5,
  },
  icon: {
    width: 80,
    height: 80,
  },
});
