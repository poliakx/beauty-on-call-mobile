Beauty on Call – MVP

Simple mobile application with a mock backend for user registration.

Tech Stack
Mobile:

React Native (Expo)
TypeScript
React Navigation
Axios

Backend:

NestJS
TypeScript
Mock API (no database)
Features
Splash, Intro, RoleSelect, Register screens
Registration form with validation
API integration
Loading and error handling
Simple logging on frontend and backend
API
POST /register

Request:

{
  "name": "Yurii",
  "phone": "+380953624587",
  "city": "Kyiv",
  "district": "Holosiivskyi",
  "role": "specialist"
}

Response:

{
  "success": true,
  "message": "Реєстрація успішна",
  "user": {
    "id": "mock-user-id",
    "name": "Yurii",
    "phone": "+380953624587",
    "city": "Kyiv",
    "district": "Holosiivskyi",
    "role": "specialist"
  }
}
Project Structure

Mobile:

screens/
components/
api/
utils/

Backend:

register/
utils/logger.ts
Running the project

Backend:

cd backend
npm install
npm run start:dev

Mobile:

cd mobile
npm install
npm start