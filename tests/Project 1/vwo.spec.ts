

import {test,expect} from 'playwright/test';
{
    test('Verify the error message is displayed when submitting an empty form', async ({ page }) => {
        await page.goto('https://vwo.com/free-trial/');

        let inputBox =  page.locator("#page-v1-step1-email")
        await inputBox.fill('jdhfjd@df.com');

        let checkBox = await page.locator('input[type="checkbox"]');
        await checkBox.check();

        let submitButton = await page.locator('button[type="submit"]');
        await submitButton.click();

    });
}