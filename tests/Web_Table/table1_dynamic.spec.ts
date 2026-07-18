import {test,expect} from '@playwright/test'
{
    test('Verify the dynamic xpath', async({page}) =>
    {
        await page.goto("https://awesomeqa.com/webtable1.html")
        const row = await page.locator("//table[@summary='Sample Table']/tbody/tr")
        const rowCount = await row.count()
        console.log(rowCount)


        for (let i=1; i<=rowCount; i++)
        {
            const rowData = await row.nth(i).locator('td').allInnerTexts()
            console.log(`Row $ {i+1}:`,rowData)
        }

    })
}