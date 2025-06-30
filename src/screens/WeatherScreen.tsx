import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Keyboard,
    useColorScheme,
    Switch,
} from 'react-native';
import { useWeather } from '../hooks/useWeather';
import { themes } from '../theme/theme';
import WeatherCard from '../components/WeatherCard';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import { useDispatch } from 'react-redux';
import { resetWeather } from '../redux/weatherSlice';

const WeatherScreen = () => {
    const scheme = useColorScheme();
    const { theme, toggleTheme, mode } = useTheme();

    const [input, setInput] = useState('');
    const { data, loading, error, fetchWeather } = useWeather();
    const dispatch = useDispatch()

    const handleSearch = () => {
        if (input.trim() === '') return;
        Keyboard.dismiss();
        fetchWeather(input.trim());
    };

    useEffect(() => {
        dispatch(resetWeather());
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ThemeToggle />
            <Text style={[styles.title, { color: theme.text }]}>Weather App</Text>
            <TextInput
                style={[styles.input, { backgroundColor: theme.input, color: theme.text }]}
                placeholder="Enter city name"
                placeholderTextColor={scheme === 'dark' ? '#888' : '#aaa'}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={handleSearch}
            />
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.button }]} onPress={handleSearch}>
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
            {error && <Text style={[styles.error, { color: theme.error }]}>{error}</Text>}
            {data && !loading && <WeatherCard data={data} />}
        </View>
    );
};

export default WeatherScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        padding: 14,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    error: {
        marginTop: 15,
        textAlign: 'center',
    },
});
