const API_KEY = "YOUR_ENV_KEY_OR_PROXY"; // ← don't commit a real key
const input = document.getElementById("search-input");
const button = document.querySelector(".search button");
const tempEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const feelsEl = document.querySelector(".feels-like");
const mainIcon = document.querySelector(".weather i");

function iconFor(main = "") {
  const m = main.toLowerCase();
  if (m.includes("clear")) return "fa-solid fa-sun";
  if (m.includes("cloud")) return "fa-solid fa-cloud";
  if (m.includes("rain") || m.includes("drizzle"))
    return "fa-solid fa-cloud-rain";
  if (m.includes("thunder")) return "fa-solid fa-cloud-bolt";
  if (m.includes("snow")) return "fa-solid fa-snowflake";
  return "fa-solid fa-smog";
}

function setLoading(isLoading) {
  button.classList.toggle("loading", isLoading);
  button.disabled = isLoading;
}

async function fetchWeather(city) {
  if (!city) return;
  setLoading(true);
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    const { name } = data;
    const { temp, humidity, feels_like } = data.main;
    const windMs = data.wind?.speed ?? 0;
    const windKmh = Math.round(windMs * 3.6);
    const main = data.weather?.[0]?.main ?? "";

    cityEl.textContent = name;
    tempEl.textContent = Math.round(temp) + "°C";
    humidityEl.textContent = Math.round(humidity) + "%";
    windEl.textContent = windKmh + " km/h";
    if (feelsEl) feelsEl.textContent = Math.round(feels_like) + "°C";
    mainIcon.className = `${iconFor(main)} main-icon`;
  } catch (err) {
    cityEl.textContent = "City not found";
    tempEl.textContent = "--";
    humidityEl.textContent = "--";
    windEl.textContent = "--";
    if (feelsEl) feelsEl.textContent = "--";
    mainIcon.className = "fa-solid fa-cloud main-icon";
  } finally {
    setLoading(false);
  }
}

button.addEventListener("click", () => fetchWeather(input.value.trim()));
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") fetchWeather(input.value.trim());
});
