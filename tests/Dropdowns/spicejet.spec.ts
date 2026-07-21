import {test,expect} from '@playwright/test'
{
    test.use(
    {
            permissions: []   // No permissions granted
    });
    test('Verify the trip of Spicejet', async({page})=>
    {
        
        //From
        test.setTimeout(60000);

        await page.goto("https://www.spicejet.com/", {waitUntil: "domcontentloaded"})
        await page.getByTestId('to-testID-origin').click()
        await page.locator("[data-testid='to-testID-origin'] input").fill("Del")
        await page.getByText('Delhi', { exact: true }).click();

        //To
        await page.getByTestId("to-testID-destination").click()
        await page.locator("[data-testid='to-testID-destination'] input").fill("Ban")
        await page.getByText('Bengaluru', {exact : true}).click()

        await page.pause()
    })
}