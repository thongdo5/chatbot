# Chatbot Program with React, TypeScript, Context, and Styled-Components

A project built with React, TypeScript, Context, and Styled-Components. This project also utilizes Webpack and Babel as build tools to enhance the development process.

## Prerequisites

Before you start, make sure you have Node.js installed. We recommend using Node version `v16.20.2`. You can manage Node versions using tools like [nvm](https://github.com/nvm-sh/nvm) or [Node Version Manager (n) for Windows](https://github.com/marcelklehr/nodist).

## Getting Started

Follow these steps to set up and run the project:

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/chatbot-program.git
```

2. Navigate to the project directory:

```
cd chatbot-program
```

3. Install project dependencies using yarn:

```
yarn
```

4. Start the development server:

```
yarn dev
```

Open your browser and navigate to http://localhost:8080 to see the Chatbot Program in action.

Project Structure
The project structure is organized to follow best practices for a React application. Here's a brief overview of important directories and files:

- `src/client/`: Contains the source code of the React application.
  - `actions/`: Redux actions.
  - `assets/`: Static assets such as images and fonts.
  - `components/`: Reusable React components used in the project.
  - `hooks/`: Custom React hooks.
  - `layouts/`: Layout components.
  - `pages/`: Top-level pages for routing.
  - `providers/`: Context providers.
  - `stub-data/`: Mock data for development and testing.
  - `styles/`: Styled-Components styles and global styles.
  - `utils/`: Utility functions.
- `App.tsx`: The main entry point for the application.
- `index.tsx`: Main index file.
- `webpack.config.js`: Webpack configuration file for bundling the application.
- `babel.config.js`: Babel configuration file for transpiling TypeScript code.
- `package.json`: Node.js project configuration file with dependencies and scripts.
