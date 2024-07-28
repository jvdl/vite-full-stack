# Vite Full Stack

This template provides a minimal setup to get started with a full stack application in Vite.

## Composition

- **Frontend**: Vite + React + TypeScript + CSS
  - A Vite configuration for React, though could be any other UI framework or library.
- **Backend**: Vite + Fastify + TypeScript
  - A Vite configuration leveraging [vite-plugin-node](https://github.com/axe-me/vite-plugin-node) to run a Fastify server.card

The frontend Vite configuration specifies a proxy to the backend server so that the frontend can make requests to the backend without host/domain/port issues. This leaves you free to configure your backend Vite however you like.

When running it utilises [concurrently](https://github.com/open-cli-tools/concurrently) to start both the frontend and backend. However feel free to run them separately if you prefer.

## Installation

```bash
# Clone the repository
git clone git@github.com:jvdl/vite-full-stack.git
cd vite-full-stack
npm install
npm run dev
```
To configure which ports the applications run on, edit the values in the `.env` file.

## Usage

`npm run` commands:

- `dev`: Start the frontend and backend in development mode.
- `build`: Build the frontend for production.
- `dev:api`: Start the backend in development mode.
- `dev:ui`: Start the frontend in development mode.
- `lint`: Lint the code.
- `preview`: Preview the production build locally.
