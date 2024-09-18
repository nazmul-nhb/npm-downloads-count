# 📦 NPM Package Download Count API

This is an Express.js + TypeScript project that provides the total download count for an NPM package over a specified time period using the NPM registry API. Users can fetch download statistics by providing a package name and a date range.

## 🚀 Features

- Retrieve the total download count for an NPM package
- Optional query parameters for specifying package name, start date, and end date
- Default values are used if no query parameters are provided

## 📚 Table of Contents

- [Installation](#-installation)
- [Usage](#%EF%B8%8F-usage)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)

## 💻 Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/nazmul-nhb/npm-downloads-count.git
   ```

2. Navigate to the project directory:

   ```bash
   cd npm-downloads-count
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

## ⚙️ Usage

### Running the API

You can access the live API at:

[https://npm-downloads-count-nhb.vercel.app](https://npm-downloads-count-nhb.vercel.app/package)

Example request:

```bash
GET https://npm-downloads-count-nhb.vercel.app/package
```

You can use query parameters to customize the request as mentioned in the [API Documentation](#-api-documentation).

### Running the API Locally

After starting the server, you can access the API at `http://localhost:4242/package`.

## 📖 API Documentation

### Base URL

```bash
    http://localhost:4242/package
```

### Endpoint

#### `GET /package`

Retrieves the download count for a specified NPM package over a specified time range.

#### Query Parameters

| Parameter     | Type     | Required | Description                                               | Default Value                 |
| ------------- | -------- | -------- | --------------------------------------------------------- | ----------------------------- |
| `packageName` | `string` | No       | The name of the NPM package to get download count for.     | `@nazmul-nhb/id-generator`     |
| `startDate`   | `string` | No       | The start date for download count in `YYYY-MM-DD` format.  | `1970-01-01`                  |
| `endDate`     | `string` | No       | The end date for download count in `YYYY-MM-DD` format.    | Current date                  |

### Example Requests

1. **Default request:**

   ```bash
   GET /package
   ```

   **Response:**

   ```json
   {
     "success": true,
     "providedBy": "Nazmul Hassan",
     "packageName": "@nazmul-nhb/id-generator",
     "downloads": 666
   }
   ```

2. **Custom package name and date range:**

   ```bash
   GET /package?packageName=express&startDate=2020-01-01&endDate=2024-01-01
   ```

   **Response:**

   ```json
   {
     "success": true,
     "providedBy": "Nazmul Hassan",
     "packageName": "express",
     "downloads": 666666
   }
   ```

### Error Handling

If an error occurs, the API responds with a status code and an error message:

```json
{
  "success": false,
  "message": "Error message"
}
```

## 🤝 Contributing

We welcome contributions to improve this project. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

Please ensure that your code follows the project's coding guidelines and includes relevant tests.

---

Made with ❤️ by [Nazmul Hassan](https://github.com/nazmul-nhb)
