# 📦 NPM Package Downloads Count

[Live API URL](https://npm-downloads-count-nhb.vercel.app/package)

This is an Express.js + TypeScript project that provides the total s (and author info - name and email) for an NPM package over a specified time period using the NPM registry API. Users can fetch download statistics by providing a package name and a date range.

## 🚀 Features

- Retrieve the total downloads count (and author info - name and email) for an NPM package
- Provides a user-friendly, formatted web view when accessed via a browser, and returns a JSON response for programmatic requests
- Optional query parameters for specifying package name, start date, and end date
- Default values are used if no query parameters are provided

## 📚 Table of Contents

- [Installation](#-installation-on-local-machine)
- [Usage](#%EF%B8%8F-usage)
- [Programmatic API Integration](#%EF%B8%8F-programmatic-api-integration)
- [API Documentation](#-api-documentation)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

## 💻 Installation on Local Machine

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

### Running the API Locally

After starting the server, you can access the API at `http://localhost:4242/package`.

## ⚙️ Usage

### Accessing the Live API

- You can access the live API at:

[https://npm-downloads-count-nhb.vercel.app](https://npm-downloads-count-nhb.vercel.app/package)

- If you make a request from a browser, you'll see a nicely formatted web view; otherwise, you'll receive a JSON response.

- Example request:

```bash
GET https://npm-downloads-count-nhb.vercel.app/package?packageName=color-generator-fl
```

You can use query parameters to customize the request as mentioned in the [API Documentation](#-api-documentation).

---

## 📝 Web View and Form for Easy Access

In addition to making API requests via query parameters, users can interact with the service through a user-friendly **web view**. This view provides an intuitive form that allows you to input the `NPM package name` and specify a `start date` and `end date` to retrieve the downloads count.

### How to Use the Web View

1. **Access the form via the browser:**
   - Navigate to the [Live API URL](https://npm-downloads-count-nhb.vercel.app/package).

2. **Fill out the form fields:**
   - **Package Name:** Enter the name of the NPM package you want to get download statistics for.
   - **Start Date:** (Optional) Choose a start date in the format `YYYY-MM-DD`. If left blank, the default will be `1970-01-01`.
   - **End Date:** (Optional) Choose an end date in the format `YYYY-MM-DD`. If left blank, the current date will be used as the default.

3. **Submit the form:**
   - Upon submitting the form, the downloads count and other information will be displayed directly in the browser in a formatted manner.
   - For API access or external integration, the form will return a JSON response. See [this section](#%EF%B8%8F-programmatic-api-integration)

This feature provides a simple and effective way to query the API without needing to manually craft requests, making the service accessible to non-technical users as well.

---

## 📖 API Documentation

### Base URL

```bash
    http://localhost:4242/package
```

or

```bash
    https://npm-downloads-count-nhb.vercel.app/package
```

### Endpoint

#### `GET /package`

Retrieves the downloads count (and author info - name and email) for a specified NPM package over a specified time range.

#### Query Parameters

| Parameter     | Type     | Required | Description                                               | Default Value              |
| ------------- | -------- | -------- | --------------------------------------------------------- | -------------------------- |
| `packageName` | `string` | No       | The name of the NPM package to get downloads count for.    | `@nazmul-nhb/id-generator` |
| `startDate`   | `string` | No       | The start date for downloads count in `YYYY-MM-DD` format. | `1970-01-01`               |
| `endDate`     | `string` | No       | The end date for downloads count in `YYYY-MM-DD` format.   | Current date               |

### Example Requests

1. **Default request:**

    ```bash
    GET /package
    ```

    **Response:**

    ```json
    {
        "success": true,
        "packageName": "@nazmul-nhb/id-generator",
        "authorName": "Nazmul Hassan",
        "authorEmail": "Email Not Provided!",
        "downloads": 666,
        "providedBy": "Nazmul Hassan"
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
        "packageName": "express",
        "authorName": "TJ Holowaychuk",
        "authorEmail": "tj@vision-media.ca",
        "downloads": 2230506276,
        "providedBy": "Nazmul Hassan"
    }
    ```

### Error Handling

If an error occurs, the API responds with a status code and an error message:

```json
{
    "success": false,
    "message": "Error Message"
}
```

## ⚙️ Programmatic API Integration

### Fetching Data to Display on External Website

- To fetch data from the API and display it on your website, make sure to add the following header in your `fetch` request to specify that the response will be in JSON format:

```js
    headers: {
        'Accept': 'application/json',
    }
```

#### Example Fetch Request

- Using `Fetch API`

```js
    fetch('https://npm-downloads-count-nhb.vercel.app/package?packageName=express', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error('Error:', error));
```

- If you're using `Axios`:

```js
    const { data } = await axios.get(
        'https://npm-downloads-count-nhb.vercel.app/package?packageName=express',
            {
                headers: { Accept: "application/json" },
            }
        );

    console.log(data);    
```

#### Utilizing API Tester

- By default, API testing clients like `Thunder Client` sends an Accept header with each request. However, if you receive an `HTML Response` from certain API testers, please include the following option in the headers to get `JSON Response`:

```bash
    'Accept': 'application/json'
```

- This will ensure that the response from the server is interpreted as JSON and can be processed accordingly on your website.

## 🚧 Roadmap

- [ ] Add support for multiple packages in a single request
- [ ] Include trending NPM packages section
- [ ] Improve error handling for edge cases

## 🤝 Contributing

We welcome contributions to improve this project. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

Please ensure that your code follows the project's coding guidelines and includes relevant tests.

---

Made with ❤️ by [Nazmul Hassan](https://nazmul-nhb.vercel.app)
