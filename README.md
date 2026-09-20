# 💱 Currency Converter

A simple currency converter built with **React and Vite** that fetches live exchange rates from a public API.

The application demonstrates distinct **Loading, Error, Empty, and Success** states.

## ✨ Features

* Convert between supported currencies
* Fetch live exchange rates
* Clear loading state while fetching data
* Helpful error state when the request fails
* Separate empty state when exchange-rate data is unavailable
* Responsive interface
* Simple and user-friendly design

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **CSS**
* **Frankfurter API**

## 🔄 Application States

### Loading

Displayed while the application is fetching the exchange rate.

### Error

Displayed when the exchange-rate request fails. The message explains what went wrong and what the user should do next.

### Empty

Displayed when exchange-rate data is unavailable. This is treated as a **data gap**, not as an error.

### Success

Displayed when a valid exchange rate is received and the conversion is completed.

## 🧪 How to Test the Required States

The states can be demonstrated using URL query parameters. **No code changes are required.**

### 1. Loading State

Open:

```text
http://localhost:5173/?state=loading
```

Then:

1. Enter any amount.
2. Click **Convert**.
3. The loading state will remain visible for several seconds.
<img width="1906" height="1017" alt="Screenshot 2026-09-20 114952" src="https://github.com/user-attachments/assets/4aa702b3-5828-4569-bba7-e6683b8bc36d" />


### 2. Error State

Open:

```text
http://localhost:5173/?state=error
```

Then:

1. Enter any amount.
2. Click **Convert**.
3. The error state will appear.
4. The message explains that the exchange-rate request failed and tells the user to check their connection and try again.


<img width="1912" height="1020" alt="Screenshot 2026-09-20 115027" src="https://github.com/user-attachments/assets/37ad97b4-8b71-43e9-a8e2-f165f9d725e5" />



### 3. Empty State

Open:

```text
http://localhost:5173/?state=empty
```

Then:

1. Enter any amount.
2. Click **Convert**.
3. The empty state will appear.
4. The interface explains that exchange-rate data is unavailable.


<img width="1907" height="1033" alt="Screenshot 2026-09-20 115055" src="https://github.com/user-attachments/assets/4d2d871f-6658-4221-abe4-7f0fde443581" />


### 4. Success State

Open:

```text
http://localhost:5173/
```

Then:

1. Enter an amount.
2. Select the source currency.
3. Select the target currency.
4. Click **Convert**.
5. The application fetches the exchange rate and displays the converted amount.

<img width="1917" height="1022" alt="Screenshot 2026-09-20 114922" src="https://github.com/user-attachments/assets/b3ebc817-8d72-4bec-8508-126bb37d6c28" />


## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/Ateefa-Syed/currency-converter.git
```

Go into the project folder:

```bash
cd currency-converter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## ✅ Project Checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## 🌐 API

The application uses the **Frankfurter API** to fetch exchange-rate data.

The API allows the application to retrieve exchange rates instead of using fixed values in the code.

