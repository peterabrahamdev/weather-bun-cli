# Weather CLI App

This simple weather app fetches current weather information using the OpenWeatherMap API and displays it in the console.

![weather-cli-bun](weather-cli-bun.svg)

## Prerequisites

- [Bun](https://bun.sh/docs/installation) installed
- OpenWeatherMap API key (Sign up [here](https://openweathermap.org/) to get your API key)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/peterabrahamdev/weather-bun-cli.git
   ```
2. Install dependencies
   ```bash
   bun install -D @types/inquirer
   ```
   ```bash
   bun install figlet
   ```
   ```bash
   bun install axios
   ```
3. Set your OpenWeatherApp API key:  
   Create a `.env` file in the root folder of your project and add your API key:
   ```bash
   API_KEY=<your_api_key>
   ```
   
## Usage
Run the application:
```bash
bun run index.ts
```

