import {test,expect} from '@playwright/test'
{
    test('Verify the country for Yoshi', async ({page})=>
    {
        await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")
        const tableTitle = await page.locator("//h2[text()='Companies directory']")
        await expect (tableTitle).toBeVisible()

        //Count the rows
        const tableInfo =  page.locator("//table[@class='companies']/tbody/tr").filter({hasText : "Yoshi Tannamuri"})
        const countryInfo = await tableInfo.locator("td[data-col='country']").innerText();
       
        console.log(`Yogi's country is ${countryInfo}`)
       
       

    })
}