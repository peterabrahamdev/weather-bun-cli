#!/usr/bin/env bun
import axios from "axios";
import { input } from '@inquirer/prompts';

const apiKey = process.env.API_KEY;

interface WeatherData {
    weather: { main: string; description: string }[];
    main: { temp: number };
}

const getWeather = async (city: string): Promise<WeatherData> => {
    // try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return response.data;
    // } catch (e) {
    //     console.error('Error fetching weather data ', e.message);
    //     return null;
    // }
}

const displayWeather = (data: WeatherData) => {
    if (data) {
        const mainWeather = data.weather[0].main;
        const description = data.weather[0].description;
        const temperature = new Intl.NumberFormat().format(data.main.temp - 272.15);

        console.log(`Weather: ${mainWeather} - ${description}`);
        console.log(`Temperature: ${temperature}°C`);
    } else {
        console.log(`Error fetching weather data.`);
    }
}

const temperature = async (): Promise<void> => {
    const city = await input({
        message: "Where would you like to check the weather?",
        default: 'Budapest',
      });

    const weatherData = await getWeather(city);
    displayWeather(weatherData);
}

temperature();

