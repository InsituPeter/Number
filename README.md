# Number Properties API

## Overview
The **Number Properties API** allows users to query numerical properties, such as:
- Prime number check
- Perfect number check
- Armstrong number check
- Even/Odd classification
- Digit sum calculation
- Fun facts about the number (from [Numbers API](http://numbersapi.com))

## Features
- Accepts **GET** requests with a `number` query parameter.
- Returns JSON response with computed properties.
- Validates input to ensure only valid integers are accepted.
- Provides appropriate HTTP status codes.
- Error handling for invalid inputs and failed external API requests.
- Fast response time (< 500ms).

---

## 🚀 Getting Started

### **1. Clone the Repository**
```sh
git clone <your-repo-url>
cd <your-project-folder>
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Run Locally**
```sh
npm start
```
Your API will run on **http://localhost:3000**.

---

## 📡 Deployment
To deploy on a service like **Render**, ensure:
- The `start` command in `package.json` is set to:
  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```
- Your `PORT` is dynamically set using:
  ```js
  const PORT = process.env.PORT || 3000;
  ```

---

## 🛠 API Usage

### **Base URL**
```
http://localhost:3000
```
(Replace `localhost:3000` with your deployed URL)

### **GET Request**
#### Endpoint:
```
/?number=<integer>
```
#### Example:
```
GET http://localhost:3000/?number=28
```

### **Response Format**
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```

### **Error Handling**
If an invalid number is provided:
```json
{
  "error": "Invalid input. Please provide an integer."
}
```

---

## 📌 Technologies Used
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **Axios** (For external API requests)
- **CORS** (Cross-Origin Resource Sharing)

---

## 🔥 Improvements & Future Features
- Add **Fibonacci number** detection.
- Support **multiple numbers** in a single request.
- Cache responses for better performance.

---

## 📄 License
This project is open-source and available under the **MIT License**.
