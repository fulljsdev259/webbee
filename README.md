# Webbee Test

This project currently includes:

- React Js
- React Router DOM
- Redux
- Redux Saga

## Quick Start do >

### Install dependencies
  ```
  npm i
  ```

- **To run the app run inside root directory**
  ```
    npm start
  ```

Project's structure will look similar to this:

```
sensibull-test
├── src
│   ├── components
│   │   
│   ├── redux
│   │   ├── actions.js
│   │   ├── constants.js
│   │   ├── rootReducer.js
│   │   ├── rootSaga.js
│   │   └── store.ts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── custom-hooks
│   └── utils
├── App.js
├── index.js
├── README.md
└── package.json

```

### ./src directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Js.

The inside of the src directory looks similar to the following:

```
src
│── components
├── custom-hooks
├── pages
├── redux
├── routes
├── services
├── utils
└── app.tsx
```

- **components**
  This is where your React components will live. Each component will have a directory containing the `.js` file. The app will come with some commonly used components like Button.



- **routes**
This is where your `react-router-dom` routers will live.


- **pages**
This is where your pages components will live. A page is a React component which will take up the entire page and be part of the router hierarchy. Each page will have a directory containing the `.js` file.


- **services**
Any services that interface with the outside world will live here (think REST APIs etc.).


- **utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, etc. are often found here. However, it should only be used for things that are truly shared across your application.

- **app.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
