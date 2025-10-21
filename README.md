# angularCookbook

![Framework: Angular](https://img.shields.io/badge/Framework-Angular-red?style=flat&logo=angular)
![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-6.x-B7178C?style=flat&logo=reactivex)
![Build](https://img.shields.io/badge/Build-Angular%20CLI%2010.0.2-informational)

A modern Angular front‑end for the recipeapp backend. This project revisits and improves the original UI/UX while showcasing best practices in Angular 10, modular architecture, and stateful services for managing recipes and a shopping list.

- Backend reference: https://github.com/GeorgeTsianakas/recipeapp
- App folder: my-cookbook-app/

## Features
- Browse, view, create, edit, and delete recipes
- Manage a shopping list (add single or multiple ingredients)
- Authentication (signup/login) with route guarding
- Persist and fetch recipes via a data storage service
- Lazy-loaded feature modules and shared module for reusability
- Basic NgRx-style reducer for the shopping list

## Tech Stack
- Angular 10 (CLI 10.0.2)
- TypeScript 3.9
- RxJS 6
- Bootstrap 4
- Karma + Jasmine for unit tests, Protractor for e2e

## Project Structure
Key paths you will interact with:
- my-cookbook-app/src/app/
  - auth/ — authentication module, guard, interceptor, and components
  - recipes/ — recipe list, details, edit flow, resolver, and service
  - shopping-list/ — components, service, and reducer for items
  - shared/ — reusable components, directives, models, and services
  - core.module.ts — app-wide singletons and cross-cutting services

## Prerequisites
- Node.js LTS (12–14 recommended for Angular 10 toolchain)
- npm 6+
- Angular CLI 10 (globally): npm i -g @angular/cli@10

## Getting Started
1) Install dependencies
- cd my-cookbook-app
- npm install

2) Run the app
- npm start
- Navigate to http://localhost:4200

3) Build for production
- npm run build
- Artifacts are generated in my-cookbook-app/dist/

## Common Scripts
From my-cookbook-app/ directory:
- npm start — start dev server with live reload
- npm test — run unit tests with Karma
- npm run e2e — run end-to-end tests with Protractor
- npm run lint — run TSLint
- npm run build — production build

## Configuration & Environments
- Environment files: my-cookbook-app/src/environments/
  - environment.ts — development
  - environment.prod.ts — production
- Update API endpoints or flags there as needed.

## Architecture Notes
- Routing is organized by feature modules (recipes, shopping-list, auth)
- HTTP calls are centralized in data-storage service
- Auth interceptor attaches tokens and handles auth errors
- Recipe data is resolved before route activation via RecipeResolver
- Shopping list uses a simple reducer for predictable updates

## Testing
- Unit tests: npm test (Karma + Jasmine)
- E2E: npm run e2e (Protractor)

## Troubleshooting
- If Angular CLI versions mismatch, install the matching CLI version globally: npm i -g @angular/cli@10
- Clear node_modules and reinstall if builds fail: rm -rf node_modules && npm i (use appropriate OS command)
- Port in use? Run: npm start -- --port 4300

## Branches
This repository currently contains master and several Dependabot branches focused on dependency updates under my-cookbook-app/. There are no separate feature branches with alternative implementations at this time.

## Contributing
Pull requests are welcome. Please open an issue first to discuss major changes.

## License
This project inherits licensing from the original recipeapp backend where applicable. If absent, assume standard open-source etiquette and include attribution.

## Acknowledgements
- Based on the recipeapp backend by George Tsianakas
- Angular documentation and community best practices
