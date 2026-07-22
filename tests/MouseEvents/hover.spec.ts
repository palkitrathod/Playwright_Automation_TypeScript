import {test,expect} from '@playwright/test'
{
    test('Check mouse hover functionality', async ({page})=>
    {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu")
        await page.getByText('Add-ons', {exact : true}).hover()
        await page.getByText('Wi-Fi',{ exact: true }).click()
        await page.pause()

 
    })
}