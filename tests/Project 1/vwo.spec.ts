

import {test,expect} from 'playwright/test';
{
    //Traditional Locators like Xpath, CSS Selectors, ID, Class Name, Name, Tag Name, Link Text, Partial Link Text are used to locate the elements on the web page.
    test('Verify the error message is displayed when submitting an empty form', async ({ page }) => {
        await page.goto('https://vwo.com/free-trial/');

        let inputBox =  page.locator("#page-v1-step1-email") //CSS Selector
        await inputBox.fill('jdhdf.com');

        let checkBox = await page.locator('//input[@id="page-free-trial-step1-cu-gdpr-consent-checkbox"]');
        await checkBox.check();

        await page.locator("//button[@data-qa='page-su-submit']").first().click();


        let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();

    });

    // test('Verify the error message is displayed whren submitting an empty form', async ({ page }) => 
    // {
    //     await page.goto('https://vwo.com/free-trial/');
    // })
}

