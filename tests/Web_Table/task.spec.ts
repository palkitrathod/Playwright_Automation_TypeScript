import {test,expect} from '@playwright/test'
{
    test ('Verify the table PIM', async ({page})=>
    {
        //Login to Portal
        await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login")
        //await page.waitForTimeout(3000);
        await page.getByRole('textbox', {name : 'username'}).fill("admin")
        await page.getByRole('textbox', {name : 'password'}).fill("Awesomeqa@4321")
        const loginButton = await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']")
        await loginButton.click()
        await page.waitForTimeout(3000);

        //Navigate to PIM option 
        await page.locator("//span[text()='PIM']").click()


        const row = await page.locator(".oxd-table-body .oxd-table-card")
        await row.first().waitFor()
        const rowCount = await row.count()
        console.log("Total Row Count : " + rowCount)

        for (let i = 0; i < rowCount; i++)
        {
            const rowData = await row.nth(i).innerText()
            console.log(`Row ${i+1}:`,rowData)

            if (rowData.includes("Terminated"))
            {
                console.log(`Row ${i}:`, rowData);
                await page.locator('.bi-trash').nth(i).hover();
                await page.locator('.bi-trash').nth(i).click();
                await page.waitForTimeout(5000);
                break;
            }
        }
        await page.pause()
    })
}