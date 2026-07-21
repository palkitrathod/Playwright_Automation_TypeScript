# Playwright Automation with TypeScript

A learning repository for browser automation and end-to-end testing using [Playwright](https://playwright.dev/) with TypeScript.

## Project Structure

```
├── .github/workflows/playwright.yml   # CI workflow (GitHub Actions)
├── playwright.config.ts               # Playwright test configuration
├── utils/
│   └── CustomReporter.ts              # Custom TTA HTML reporter (step-level report with screenshots/video)
├── tests/
│   ├── example.spec.ts                # Default Playwright example tests
│   ├── Basics/
│   │   └── basic.spec.ts              # Verify page title
│   ├── First Code in Playwright/
│   │   ├── first.spec.ts              # First test case — title + logo visibility assertions
│   │   ├── BCP.spec.ts                # Browser → Context → Page hierarchy (standalone script)
│   │   ├── BCP2.spec.ts               # Launch browser, create context, open page (standalone script)
│   │   ├── BCP_Multiple_Context.spec.ts  # Multiple isolated contexts (admin/viewer sessions)
│   │   └── task.spec.ts               # Two apps in separate contexts, parallel navigation
│   ├── CSS Selectors/
│   │   └── css.spec.ts                # CSS selector locator strategies
│   ├── Locators_Commands/
│   │   ├── project.spec.ts            # Locator and command practice
│   │   └── xpath.spec.ts              # XPath locator strategies
│   ├── XPath_Functions/
│   │   └── fun.spec.ts                # XPath functions (contains, text, etc.)
│   ├── MultiElement_Locators/
│   │   ├── multi_element.spec.ts      # Working with multiple matched elements
│   │   └── student_login.spec.ts      # Student login form — fill, checkbox, URL assertion
│   ├── Dropdowns/
│   │   ├── dropdown1.spec.ts          # Normal (native) dropdown selection by role/option
│   │   ├── advanced.spec.ts           # Advanced react-select boxes (single, multi, creatable, async)
│   │   └── spicejet.spec.ts           # SpiceJet origin/destination autocomplete dropdowns
│   ├── Web_Table/
│   │   ├── table1.spec.ts             # Iterate a web table with dynamic XPath to find a row
│   │   ├── table1_dynamic.spec.ts     # Read all rows of a table dynamically
│   │   ├── task.spec.ts               # OrangeHRM PIM table — login and iterate rows
│   │   ├── task1.spec.ts              # Find a specific company's country in a table
│   │   ├── webtable_xpath.spec.ts     # Select a row checkbox via preceding-sibling XPath
│   │   ├── filter_page_locator.spec.ts  # Narrow locators with .filter({ hasText }) + count/attr asserts
│   │   ├── chaining_locators.spec.ts  # Chain locators from a filtered row to read its cells
│   │   ├── paginationTask.spec.ts     # Search across paginated table pages until a row is found
│   │   └── employeeWithPagination.spec.ts  # Loop through pagination "Next" until a match is found
│   ├── Session_State/
│   │   └── ss1.spec.ts                # Storing/reusing browser session state
│   └── Project 1/
│       ├── play_locators.spec.ts      # VWO signup form validation, written with test.step()
│       ├── play_selector.spec.ts      # VWO free-trial form validation using Playwright locators
│       └── vwo.spec.ts                # VWO site test scenarios
```

## Concepts Covered

- **Browser / Context / Page hierarchy** — launch a browser once (heaviest operation), create isolated contexts (fresh sessions with separate cookies), and open pages (tabs) inside them.
- **Multiple browser contexts** — simulate multiple users (e.g. admin and viewer) or multiple applications in the same test using isolated sessions.
- **Test runner basics** — writing tests with `test()` and `expect()` from `@playwright/test`, asserting page titles, URLs, and element visibility.
- **Parallel navigation** — using `Promise.all` to navigate multiple pages simultaneously.
- **Locator strategies** — CSS selectors, XPath, XPath functions, and handling multi-element locators.
- **Filtering & chaining locators** — narrowing matches with `.filter({ hasText })` and chaining from a row locator down to individual cells.
- **Web tables** — iterating rows/columns with dynamic XPath, reading cell data, selecting rows via checkboxes, filtering rows with `.filter({ hasText })`, and searching across paginated tables by clicking "Next" until a match is found.
- **Dropdowns** — native dropdowns, react-select style boxes (single, multi, creatable, async), and autocomplete/search dropdowns.
- **Form interactions** — filling inputs, checking boxes, submitting, and asserting resulting URLs and validation messages.
- **Session state** — saving and reusing authenticated browser state across tests.
- **Test steps** — grouping actions with `test.step()` for readable, granular reporting.

## Reporting

Test runs produce three reports (configured in `playwright.config.ts`):

- **Playwright HTML report** — `npx playwright show-report`
- **Allure report** — raw results are written to `allure-results/`; generate and view the HTML report with:
  ```bash
  npm run allure:generate
  npm run allure:open
  ```
- **Custom TTA report** — `utils/CustomReporter.ts` generates a self-contained HTML report per run under `tta-report/report_<timestamp>.html` (with `tta-report/index.html` always redirecting to the latest run), showing each `test.step()` with duration, console logs, and screenshots.

Report output folders (`allure-results/`, `allure-report/`, `tta-report/`) are git-ignored since they're regenerated on every run.

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
