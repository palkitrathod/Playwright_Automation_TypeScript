import {test,expect} from '@playwright/test'
{
    test('Verify the advanced selector', async ({page})=>
    {
        //① Single — searchable
        await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes")
        await page.getByTestId('rs-single-input').click()
        await page.getByRole('option', {name : 'Cypress'}).click()

        //② Multi — chips with remove
        await page.getByTestId('rs-multi-input').click()
        await page.getByRole('option', {name : "JUnit"}).click()
        await page.getByText("Pytest", { exact: true }).click();
        await page.keyboard.press("Escape");


        //③ Creatable multi — type and Enter
        await page.getByTestId("rs-creatable-input").click()
        await page.getByText('performance', {exact : true}).click()
        await page.getByText('accessibility', {exact : true}).click()
        await page.keyboard.press("Escape");

        //⑤ Async — fetched on type
        await page.locator("#rs-async").click()
        await page.getByTestId("rs-async-input").fill("pun")
        await expect (page.getByTestId('rs-async-menu')).toContainText("Pune")
        await page.getByRole('option', { name: 'Pune' }).click();




        await page.pause()

    })
}