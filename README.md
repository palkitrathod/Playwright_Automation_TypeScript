# Playwright Automation with TypeScript

A learning repository for browser automation and end-to-end testing using [Playwright](https://playwright.dev/) with TypeScript.

## Project Structure

```
├── .github/workflows/playwright.yml   # CI workflow (GitHub Actions)
├── playwright.config.ts               # Playwright test configuration
├── tests/
│   ├── example.spec.ts                # Default Playwright example tests
│   ├── Basics/
│   │   └── basic.spec.ts              # Verify page title
│   └── First Code in Playwright/
│       ├── first.spec.ts              # First test case — title + logo visibility assertions
│       ├── BCP.spec.ts                # Browser → Context → Page hierarchy (standalone script)
│       ├── BCP2.spec.ts               # Launch browser, create context, open page (standalone script)
│       ├── BCP_Multiple_Context.spec.ts  # Multiple isolated contexts (admin/viewer sessions)
│       └── task.spec.ts               # Two apps in separate contexts, parallel navigation
```

## Concepts Covered

- **Browser / Context / Page hierarchy** — launch a browser once (heaviest operation), create isolated contexts (fresh sessions with separate cookies), and open pages (tabs) inside them.
- **Multiple browser contexts** — simulate multiple users (e.g. admin and viewer) or multiple applications in the same test using isolated sessions.
- **Test runner basics** — writing tests with `test()` and `expect()` from `@playwright/test`, asserting page titles, URLs, and element visibility.
- **Parallel navigation** — using `Promise.all` to navigate multiple pages simultaneously.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

```bash
npm install
npx playwright install
```

### Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/Basics/basic.spec.ts
```

Run in headed mode (see the browser):

```bash
npx playwright test --headed
```

View the HTML report of the last run:

```bash
npx playwright show-report
```

### Running Standalone Scripts

Some files (`BCP.spec.ts`, `BCP2.spec.ts`, `BCP_Multiple_Context.spec.ts`) are standalone scripts without `test()` blocks — run them directly instead of through the test runner:

```bash
npx tsx "tests/First Code in Playwright/BCP.spec.ts"
```

## CI

Tests run automatically on GitHub Actions via the workflow in `.github/workflows/playwright.yml`.
