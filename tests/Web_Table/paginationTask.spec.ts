import {test,expect} from '@playwright/test'

test('Find the Luca by using async function', async ({page}) =>
{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")
    let employeeName = "Mia Hoffmann"
    let row

    while(true)
    {
        row = page.locator("#employees-tbody tr").filter({hasText : employeeName})
        if (await row.count())
        {
            break
        }
        const nextButton = await page.getByTestId('next-page')
        if(await await nextButton.isDisabled()) throw new Error("Row not found!");
        await nextButton.click();
    }
    const employeeEmail = await row.locator("td[data-col='email']").innerText()
    const employeeCountry = await row.locator("td[data-col='country']").innerText()

    console.log("Country of " + employeeName + " is : " + employeeCountry)
    console.log("Email of " + employeeName + " is : " + employeeEmail)

    await page.pause()
})