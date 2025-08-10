# Copilot Instructions for AI Agents

## Mandatory First Response Protocol
**ALWAYS start every interaction by stating:**
1. "I am GitHub Copilot"
2. Stating what model will be used
3. Stating what custom instructions files will be used from `.github/instructions/`
4. Then proceed with the user's request

## Project Overview
- This is a Node.js Express application using GOV.UK Frontend and Nunjucks templates.
- The app serves as a frontend for a backend REST API at `http://localhost:8000`.
- Main source code is in `src/` (see `src/app.js`, `src/routes/`, `src/views/`).

## Architecture & Structure
- `src/app.js`: App entry, Express setup, middleware, Nunjucks config.
- `src/routes/`: Each file is a feature-focused Express Router (e.g., `register-surplus-forms.js`).
- `src/views/`: Nunjucks templates, organized as `layouts/`, `pages/`, and feature subfolders.
- `src/public/`: Static assets (CSS, images, fonts).
- Use `logger.js` for all logging (see `src/logger.js`).

## Key Conventions
- **Routes:**
  - Use Express Router, one file per feature/resource.
  - Keep route handlers thin; move business logic to services if needed.
  - Always use async/await and proper error handling (see `logger.js`).
- **Templates:**
  - Use Nunjucks with GOV.UK macros/components.
  - Prepare display values in route handlers; keep template logic minimal.
  - Organize templates by feature in `views/pages/`.
- **Styling:**
  - Use GOV.UK Frontend styles and macros; custom styles in `src/public/assets/css/`.
  - Follow BEM for custom class names.

## Developer Workflows
- **Install:** `npm install`
- **Run (dev):** `npm run dev` (auto-reloads, runs on http://localhost:3000)
- **Test:**
  - All tests: `npm test`
  - With coverage: `npm test -- --coverage`
  - Single file: `npm test -- __tests__/routes/index.test.js`
- **Debug:** Use VS Code Node.js debugging or `npm run dev` with breakpoints.

## API & Integration
- Use `node-fetch` for HTTP requests (not axios).
- Always check `response.ok` and handle errors.
- Set appropriate `Content-Type` headers.

## Patterns & Examples
- **Route Example:**
  ```js
  const router = require('express').Router();
  router.get('/feature', async (req, res) => {
    try {
      // ...
      res.render('pages/feature', { data });
    } catch (e) {
      logger.error(e);
      res.status(500).render('error');
    }
  });
  module.exports = router;
  ```
- **Template Example:**
  ```njk
  {% from "govuk/components/button/macro.njk" import govukButton %}
  {{ govukButton({ text: "Continue", href: "/next" }) }}
  ```

## Additional Notes
- For new features, add routes in `src/routes/` and views in `src/views/pages/`.
