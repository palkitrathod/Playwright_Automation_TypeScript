import { test, expect } from '@playwright/test';


test('Verify the signup page has an error with the incorrect email ID. ', async ({ page }) => {

    await test.step('Navigate to the VWO free trial signup page', async () => {
        await page.goto("https://vwo.com/free-trial/");
    });

    await test.step('Fill an invalid email ID and accept terms', async () => {
        await page.getByRole('textbox', { name: "email" }).fill("abcd");
        await page.getByRole('checkbox').check();
    });

    await test.step('Submit the signup form', async () => {
        await page.getByRole('button', { name: "Create a Free Trial Account" }).click();
    });

    await test.step('Verify the invalid email error message is displayed', async () => {
        let error_msg = await page.locator("xpath=//div[contains(@class,'invalid-reason')]").first().textContent();
        expect(error_msg).toContain("The email address you entered is incorrect.");
        await page.waitForTimeout(10000);
    });

});