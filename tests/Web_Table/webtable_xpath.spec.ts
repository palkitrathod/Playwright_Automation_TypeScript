import {test,expect} from '@playwright/test'
{
    test('Clicking the checkbox for the Aarav Sharma', async ({page}) =>
    {
        await page.goto("https://app.thetestingacademy.com/playwright/webtable")
        const empName = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[1]/td[2]/preceding-sibling::td/input[@type='checkbox']").click()
        await page.pause()
    })
}