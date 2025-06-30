import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { mode, toggleTheme, theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.card }]}>
            <Switch
                value={mode === 'dark'}
                onValueChange={toggleTheme}
                thumbColor={'#f4f3f4'}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
             <Text style={{ fontSize: 20, marginRight: 8 }}>
                {mode === 'dark' ? '🌙' : '☀️'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginBottom: 10,
    },
    icon: {
        marginRight: 8,
    },
});

export default ThemeToggle;
