# Namaste React Notes - Episode 2

## 1. npm & Package Manager Basics
- **npm**: Package manager to install/manage packages (also called **dependencies**).
- **package.json**: Configuration file for npm.
- **Key package**: Bundler (e.g., `webpack`, `vite`, `parcel`) bundles the app for production deployment.
- **Install** a bundler for dev:
  ```bash
  npm install -D parcel

  - **`-D`**: Installs as a **dev dependency** (used only in development).
  - **Normal dependencies**: Required for production too.

---

## 2. Versioning in package.json
- **^2.13.0**: Updates **minor versions**.
- **~2.13.0**: Updates **patch versions**.

---

## 3. Dependencies & Transitive Dependencies
- **Transitive dependencies**: Dependencies of dependencies (e.g., `parcel` → has its own dependencies).
- Run:
  ```bash
  npm install -D parcel
  ```
  - Installs `parcel` and all its transitive dependencies into the **node_modules** folder.

---

## 4. .gitignore & Node Modules
- **`.gitignore`**: Specifies files to exclude from Git.
  - Commonly ignored: `node_modules`, `dist`, `parcel-cache`.
- With **`package.json`** & **`package-lock.json`**, you can regenerate `node_modules` using:
  ```bash
  npm install
  ```

---

## 5. Running & Building App
- **Start App**:
  ```bash
  npx parcel index.html
  ```
  - **`npx`**: Executes a package (e.g., `parcel`).
  - Builds & deploys the app to **localhost**.

- **Production Build**:
  ```bash
  npx parcel build index.html
  ```
  - Output: Files in the `dist` folder.
  - **Conflict**: Remove `"main": "App.js"` in `package.json` to avoid errors.

---

## 6. React via npm vs CDN
- **CDN method (not preferred)**:
  ```html
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  ```
  - ❌ **Issues**:
    - Requires **separate network calls**.
    - **Version changes** need manual URL updates.

- **Preferred Method**:
  Install via npm:
  ```bash
  npm install react react-dom
  ```
  - Use `import` to load:
    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";
    ```

---

## 7. Modules in Modern JavaScript
- Use **module type** for scripts with imports:
  ```html
  <script type="module" src="./App.js"></script>
  ```

---

## 8. Parcel Generated Folders
- `parcel` creates:
  - **`dist/`**: Production-ready files.
  - **`parcel-cache/`**: Cache for faster builds.
- Add them to `.gitignore`.

---

## 9. Browser Compatibility
- Use **`browserslist`** in `package.json` for cross-browser compatibility.
  - More info: [browserslist.dev](https://browserslist.dev)

---

## Quick Commands Summary
| **Command**                  | **Purpose**                             |
|------------------------------|-----------------------------------------|
| `npm install`                | Install all dependencies.              |
| `npm install -D parcel`      | Install parcel as dev dependency.      |
| `npx parcel index.html`      | Build & deploy app locally.            |
| `npx parcel build index.html`| Create production build in `dist/`.    |

---
