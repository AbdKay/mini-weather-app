# 🌦️ Mini Weather App

A simple weather application built with **HTML, CSS, and JavaScript**
that fetches live weather data using the [OpenWeather
API](https://openweathermap.org/).

This app lets you search for any city and view:\

- Current temperature\
- Feels like temperature\
- Humidity\
- Wind speed (converted to km/h)\
- Weather condition icon

---

## 📸 Screenshots

### 🌞 Dubai Weather

![Dubai Weather](screenshots/Screenshot-2025-08-21-103607.png)

### ☁️ London Weather

![London Weather](screenshots/Screenshot-2025-08-21-103643.png)

### 🌧 Sydney Weather

![Sydney Weather](screenshots/Screenshot-2025-08-21-103825.png)

---

## 📦 Features

- Live weather data from OpenWeather\
- Dynamic weather icons (Font Awesome)\
- Handles errors (e.g., city not found) gracefully\
- Responsive and clean UI\
- Ready to deploy on Netlify/Vercel

---

## 🛠️ Technologies Used

- **HTML5**\
- **CSS3**\
- **JavaScript (Vanilla)**\
- **OpenWeather API**\
- **Font Awesome**

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/mini-weather-app.git
cd mini-weather-app
```

### 2. Get your API key

- Sign up at
  [OpenWeather](https://home.openweathermap.org/users/sign_up)\
- Go to your **API Keys** section and copy your key

### 3. Add your API key

In `script.js`, replace this line:

```js
const API_KEY = "YOUR_ENV_KEY_OR_PROXY";
```

with your actual key:

```js
const API_KEY = "YOUR_REAL_KEY_HERE";
```

> ⚠️ **Important:** If you plan to deploy publicly, don't hardcode the
> key. Instead, use environment variables (e.g., in Netlify or Vercel)
> or a small backend proxy.

### 4. Run locally

Just open `index.html` in your browser.

If you use a local server (recommended for testing):

```bash
# Using VS Code
Right-click index.html → "Open with Live Server"
```

---

## 🌍 Deployment

- You can deploy this project for free on:
  - [Netlify](https://www.netlify.com/)\
  - [Vercel](https://vercel.com/)\
  - GitHub Pages

> Remember to configure your **API key** in your hosting environment
> settings.

---
