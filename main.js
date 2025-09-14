// main.js
// Варіант 2 - Доходи та витрати банків (серпень 2024, період = місяць)

// 1) Константи для запиту
const date = "20240801";      // YYYYMM для серпня 2024
const time_period = "m";    // 'm' = місяць 

// 2) Базовий шлях API
const apiPath = "/NBUStatService/v1/statdirectory/banksincexp";
const base = "https://bank.gov.ua/";

// 3) Імпорт класу URL
const { URL } = require('url');

// 4) Створюємо об'єкт URL
const myUrl = new URL(apiPath, base);

// 5) Додаємо параметри через SearchParams
myUrl.searchParams.set("date", date);
myUrl.searchParams.set("period", time_period);
myUrl.searchParams.set("json", "");   // параметр 'json' для отримання JSON

// 6) Виводимо сформований URL у консоль
console.log(myUrl.toString());
