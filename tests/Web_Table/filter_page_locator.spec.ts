import {test,expect} from '@playwright/test'

{
    test('Verify the locator by using Filter', async ({page}) =>
    {
        //used filter method to get the data    
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
        const forgottenPasswordLink = await page.locator("a.list-group-item")
            .filter({hasText : "Forgotten Password"}).click()
        
        //Counting total options in the panel it should be 13 only kind of Assertion
        const totalOption = await page.locator("a.list-group-item")
        await expect(totalOption).toHaveCount(13)

        //Clicking to Privacy Policy Link at the footer
        const privacyPolicyLink = await page.locator("footer a")
            .filter({hasText : 'Privacy Policy'})
        await expect(privacyPolicyLink).toHaveAttribute('href', '#privacy-policy')

        //await page.pause()


    })
    
}