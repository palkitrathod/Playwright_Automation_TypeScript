import {test,expect} from '@playwright/test'
{
    test('Validate the normal dropdown', async ({page})=>
    {
        //Programming Language Dropdown
        await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")
        await page.getByTestId('lang-trigger').click()
        await page.getByRole('option', {name : 'Python'}).click()

        //Experience Level Dropdown
        await page.getByTestId('experience-trigger').click()
        await page.getByRole('option', {name : 'Senior (7+ years)'}).click()

        await page.pause()
    })
}