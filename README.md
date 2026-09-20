# Currency Converter

A simple currency converter built with React and Vite. It fetches live exchange rates from a public API and demonstrates loading, error, empty, and successful data states.

## Features

- Convert between supported currencies
- Fetch live exchange rates
- Loading state while data is being fetched
- Error state when the request fails
- Empty state when no exchange rate is available
- Responsive and accessible interface

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Frankfurter API

## Data States

The application handles four different situations:

### Loading State

The application shows a loading indicator while the exchange-rate request is being processed.

### Error State

The application shows an error message when the exchange-rate request cannot be completed. The message explains what failed and tells the user to check their connection and try again.

### Empty State

The application shows an empty state when no exchange rate is available for the requested currency pair.

This is presented as missing data rather than an error because the request itself completed successfully but there is no rate to display.

### Success State

When an exchange rate is available, the application displays the converted amount.

## How to Test the States

The three required states can be demonstrated using URL query parameters. No code changes are required.

### Loading

1. Open the application with `?state=loading`.
2. Enter any amount.
3. Click **Convert**.
4. The loading interface will remain visible for several seconds.

Example:

`http://localhost:5173/?state=loading`

### Error

1. Open the application with `?state=error`.
2. Enter any amount.
3. Click **Convert**.
4. The error state will be displayed.
5. The message explains that the exchange-rate request failed and tells the user to check their connection and try again.

Example:

`http://localhost:5173/?state=error`

### Empty

1. Open the application with `?state=empty`.
2. Enter any amount.
3. Click **Convert**.
4. The empty state will be displayed.
5. The interface explains that no exchange rate is available instead of reporting an error.

Example:

`http://localhost:5173/?state=empty`

### Successful Conversion

1. Open the application without a state parameter.
2. Enter an amount.
3. Select the source and target currencies.
4. Click **Convert**.
5. The application fetches the live exchange rate and displays the result.

Example:

`http://localhost:5173/`

## Running Locally

Clone the repository and install the dependencies:

```bash
npm install
