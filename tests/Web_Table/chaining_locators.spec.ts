import {test,expect} from '@playwright/test'
{
    test('Verify the pagination', async ({page})=>
    {
        await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")
        const priyaRow = await page.locator("#employees-tbody tr").filter({hasText : "Priya Kapoor"})
        const priyaEmail = await priyaRow.locator('td[data-col="email"]').innerText()
        const priyaCountry = await priyaRow.locator('td[data-col="country"]').innerText()

        console.log(priyaEmail, priyaCountry)
        await page.pause()

    })
}