import {test,expect} from '@playwright/test';
{
    test('Verify the element in multielement locator', async ({ page }) => 
    {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        const acc_nav = await page.getByText('Account Navigation')
        await expect(acc_nav).toBeVisible();
        console.log("Account Navigation is present ✅");

        //Get the list of available options and count as well

        const rightPanelLinksTexts: string[] = await page.locator("a.list-group-item").allInnerTexts(); //CSS Selector
        console.log("Total number of Inner Texts:" +rightPanelLinksTexts.length);

        //Condition for forgotten password linked text

        for (const linkText of rightPanelLinksTexts)
        {
            if(linkText === "Forgotten Password")
            {
                await page.getByText(linkText).first().click();
                console.log("Forgotten Password link is clicked ✅");
                break;
            }
        }
        page.pause();

        for (const linkText of rightPanelLinksTexts)
        {
            if(linkText === "My Account")
            {
                await page.getByText(linkText).first().click();
                console.log("My Account link is clicked ✅");
                break;
            }
        }


    })

}