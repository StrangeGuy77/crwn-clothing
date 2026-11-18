# Crown Clothing

A commercial clothing platform built with React. This project serves as a starting point for developing an online clothing store, with reusable UI components, authentication flows, application context and Firebase utilities.

## Tech Stack

- **React** - UI development and component-based architecture.
- **JavaScript (JSX)** - Application logic and component definitions.
- **SCSS** - Component styling and stylesheet organization.
- **Firebase** - Authentication and backend utilities.

## Project Structure

The source code is organized by responsibility, keeping reusable components, application routes, shared context and utilities separated.

```text
src/
├── assets/
│   ├── categories.json
│   └── crown.svg
├── components/
│   ├── button/
│   ├── category-item/
│   ├── directory/
│   ├── form-input/
│   ├── navigation/
│   ├── sign-in-form/
│   └── sign-up-form/
├── context/
│   └── user.context.jsx
├── routes/
│   ├── authentication/
│   └── home/
├── utils/
│   └── firebase/
│       └── firebase.utils.js
├── App.js
├── App.css
├── App.test.js
├── index.js
├── index.scss
├── reportWebVitals.js
└── setupTests.js
```

### Components

Reusable UI elements are grouped into individual directories. Each component keeps its JSX implementation and SCSS stylesheets together.

### Context

Shared application state is handled through React Context. The current context implementation is responsible for user-related state.

### Routes

Application views are organized by route, with separate directories for authentication and the home page.

### Utils

Contains shared utilities and external service integrations, currently including Firebase-related functionality.

### Assets

Static resources and application data, including category definitions and branding assets.

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd crwn-clothing
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## Environment Variables

The application uses a local environment configuration file.

Create a `.env.local` file in the project root and configure the required Firebase credentials.

Make sure not to commit private credentials or environment-specific configuration to the repository.

## Available Scripts

Run the following commands from the project root:

| Command | Description |
|---|---|
| `npm start` | Starts the development server. |
| `npm test` | Runs the test suite. |
| `npm run build` | Creates a production build. |

Check `package.json` for the available scripts and their exact configuration.