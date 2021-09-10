# meteor-app

## 1. Credits

Initial template reused from [my own TAP ESTL Assignment](https://github.com/Permas-Teo/salary-app).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Navigation Bar component referenced from https://chakra-templates.dev/.

Weather Icons made by Pixel perfect from [Flaticon](www.flaticon.com)

## 2. Setup Instructions

#### Install dependencies

In the repository root folder, install dependencies (npm 6.14.14):

`npm install`

#### Run React webapp

In the repository root folder, to run React webapp:

`npm start`

Server runs by default at http://localhost:3000

#### Run tests

In the repository root folder, to run tests:

`npm test`

## 3. Assignment Writeup

![Screenshot](public/pic.png)

1. Live filter implementation, there is no need to click on a separate button to apply the filter(s).
1. Timepicker is disabled until a valid date is selected with the Datepicker.
1. Latest timestamp is queried (default api behaviour) when either or both Datepicker and Timepicker fields are unfilled.
1. "True Timestamp" denotes the actual timestamp returned by api call.
1. The location data is shown/hidden via a Show/Hide toggle button.
