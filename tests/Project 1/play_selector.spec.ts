import { test, expect } from '@playwright/test';

test("Verifying everything using Playwright Locators", async ({ page }) => 
{
    //Navigate to the website
    await page.goto('https://vwo.com/free-trial/');

    //Locate the element 
    await page.getByRole('textbox', { name: 'Email' }).fill('jdhdf.com');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: "Create a Free Trial Account" }).click();
    let error_msg = await page.locator("xpath=//div[contains(@class,'invalid-reason')]").first().textContent();

    // let error_msg_pw = await page.getByText('The email address you entered is incorrect.').textContent();

    expect(error_msg).toContain("The email address you entered is incorrect.");
    await page.waitForTimeout(10000);


});