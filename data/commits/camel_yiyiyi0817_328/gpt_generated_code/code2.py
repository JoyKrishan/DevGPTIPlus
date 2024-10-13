import pyowm

def get_weather(city_name, api_key, units='metric'):
    owm = pyowm.OWM(api_key)
    observation = owm.weather_at_place(city_name)
    weather = observation.get_weather()
    temperature = weather.get_temperature(units)['temp']
    humidity = weather.get_humidity()
    weather_conditions = weather.get_status()
    print(f'The current weather in {city_name} is:')
    print(f'Temperature: {temperature}°{get_unit_symbol(units)}')
    print(f'Humidity: {humidity}%')
    print(f'Weather conditions: {weather_conditions}')

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