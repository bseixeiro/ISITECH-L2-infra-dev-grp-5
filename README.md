# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# WatchMeSwipe

Discover your next favourite film with our application, which combines the best of film recommendations with the intuitive interface of swipe applications. Each time you open the application, you'll be presented with a random film.

- Swipe right to add the film to your viewing list.
- Swipe left to move on to the next film.
- If you've already seen the film, simply use the ‘Déjà vu’ button at the bottom of the screen to move on to the next film without further action.
  This unique feature lets you quickly browse through films until you find the one that perfectly matches your current mood.

What's more, the app offers complete management of your film collection thanks to a page dedicated to personalised categories. Create, organise and sort your films according to your own criteria, whether by genre, mood or any other personal preference. More than just a watchlist, it's a real tool for film buffs who want to keep total control of their film library.

With this application, discovering and organising your favourite films has never been easier or more enjoyable!

## Members

| Fullname              | Student email address                 | Role          |
| --------------------- | ------------------------------------- | ------------- |
| Max-Yves Mastrodicasa | maxyves.mastrodicasa@ecole-isitech.fr | Product owner |
| Benjamin Seixeiro     | benjamin.seixeiro@ecole-isitech.fr    | Senior dev    |
| Maxime Stajszczyk     | maxime.stajszczyk@ecole-isitech.fr    | Junior dev    |
| Adrien Castel         | adrien.castel@ecole-isitech.fr        | Junior dev    |

## Note of intent

With this application, we want to transform the way users interact with their streaming platforms. By integrating a familiar swiping approach with personalised film management, our ambition is to create a must-have tool for all film lovers, making discovering and organising films simple, fun and tailored to their needs.

## Getting Started

Welcome to the `WatchMeSwipe` development environment installation guide. This document provides comprehensive instructions to facilitate smooth and consistent installation in different development environments.

### Dependency Installation

To get started, you need to install all the necessary dependencies for the project. Make sure that Node.js is installed on your machine.

Clone the repository:

bash:

```
git clone https://github.com/username/WatchMeSwipe.git
cd WatchMeSwipe
```

Install the dependencies using npm or yarn :

If you use npm :

```
npm install
```

Or if you prefer yarn :

```
yarn install
```

This will download and install all the necessary dependencies specified in the package.json file.

### Running the application

Once the dependencies have been installed, you can run the application in development mode. This mode offers a smooth development experience with hot reloading, which means that changes made to files will be immediately visible without a manual restart.

Launch the development server:

If you are using npm :

```
npm run dev
```

Or with yarn :

```
yarn dev
```

This starts the Vite development server and the application will be accessible at http://localhost:5173 (by default).

Launch the server:

If you are using npm :

```
npm run
```

Or with yarn :

```
yarn
```

This starts the Vite development server and the application will be accessible at http://localhost:4173 (by default).

### Building the application

When you are ready to prepare the application for production, you need to compile your source code into an optimised version.

Generate a production version:

If you are using npm :

```
npm run build
```

Or with yarn :

```
yarn build
```

This will produce an optimised, minified version of your application in the dist directory. You can now deploy this version on your server.

Preview of the production version :

If you want to test the production version locally before deploying it, you can use the following command:

If you are using npm :

```
npm run preview
```

Or with yarn :

```
yarn preview
```

This will launch a local server to view the built application.

### Tooling

The application is equipped with various tools to improve the development experience and guarantee code quality. Here's how to configure them:

Linting:

To ensure code consistency, a linter is configured. You can run the linter with the following command:

If you are using npm :

```
npm run lint
```

Or with yarn :

```
yarn lint
```

This command will analyse the source code and report any style problems or potential errors.

Formatting code :

To automatically format your code, you can use Prettier with the following command:

If you are using npm :

```
npm run format
```

Or with yarn :

```
yarn format
```

This will apply the formatting rules defined in the source code.

Tests :

If tests are configured in the project, you can run them with :

If you are using npm :

```
npm run test
```

Or with yarn :

```
yarn test
```

These tools will help you maintain high-quality code throughout the development cycle.
