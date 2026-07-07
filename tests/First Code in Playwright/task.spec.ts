import { test, expect } from '@playwright/test';

test('Open TTACart and TTA Bank in separate browser contexts', async ({ browser }) => {

  // Context 1 - TTACart
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  // Context 2 - TTA Bank
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  // Navigate simultaneously
  await Promise.all([
    page1.goto('https://app.thetestingacademy.com/playwright/ttacart/'),
    page2.goto('https://tta-bank-digital-973242068062.us-west1.run.app/')
  ]);

  // Verify both pages are loaded
  await expect(page1).toHaveURL(/ttacart/);
  await expect(page2).toHaveURL(/tta-bank/);

  // Optional wait to observe both applications
  await page1.waitForTimeout(5000);

  // Close contexts
  await context1.close();
  await context2.close();
});