import requests

def get_weather(city_name, api_key, units):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units={units}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        temperature = data['main']['temp']
        humidity = data['main']['humidity']
        weather_conditions = data['weather'][0]['description']
        print(f'The current weather in {city_name} is:')
        print(f'Temperature: {temperature}°{get_unit_symbol(units)}')
        print(f'Humidity: {humidity}%')
        print(f'Weather conditions: {weather_conditions}')
    else:
        print('Failed to get weather data. Error code:', response.status_code)

def get_unit_symbol(units):
    if units == 'metric':
        return 'C'
    elif units == 'imperial':
        return 'F'
    else:
        return 'K'

# Replace YOUR_API_KEY with your OpenWeatherMap API key
api_key = 'YOUR_API_KEY'
city_name = input('Enter the name of the city: ')
units = input('Enter the units (standard, metric, or imperial): ')
get_weather(city_name, api_key, units)