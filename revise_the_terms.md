## Based on the code i had written, developed a weather application using Next.js 14 with Tailwind CSS. Here is a summary of the key features and components in my project:

This project is a weather application developed using Next.js 14 with Tailwind CSS. Below is a summary of its key features and components:

1. **Home Page (app/page.jsx):** This component represents the home page of my weather app. It displays a welcome message and a link to the search page.

2. **Search Page (app/search/page.jsx):** This page represents the search page of my app. It contains a form where users can enter a city name to search for weather information. Upon submission, the user is redirected to the detail page.
3. **Detail Page (app/detail/page.jsx):** This page represents the detail page of my app. It fetches the weather and forecast data for a specified city using the OpenWeatherAPI. The data is displayed using the `Weather` and `Forecast` components.

4. **Weather Information Component (app/component/details/weatherinfo.jsx):** This component renders the current weather information for a city. It displays the city name, current date and time, weather description, humidity, and temperature (in Celsius or Fahrenheit). It also provides a button to switch between temperature units.

5. **Forecast Component (app/component/details/forecast.jsx):** This component renders a 5-day forecast for a city. It displays the date, weather description, and temperature for each day.
You have used React hooks (useState and useEffect) to manage state and handle side effects in the components

Additional Features:

- Utilizes React hooks (useState and useEffect) for state management and handling side effects.
- Uses the react-icons library to display weather icons based on weather descriptions.
- Implements moment.js for formatting dates and timestamps.
- Implements client-side routing using next/link and next/navigation modules.
- Utilizes Tailwind CSS for styling, including pre-defined utility classes for layout, typography, and colors.

This weather application enables users to search for weather information by city name and provides both current weather and 5-day forecast data.

