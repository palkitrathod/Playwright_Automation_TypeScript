import {test,expect} from '@playwright/test';
{

    test('Verify student can login with valid credentials', async ({page})=>
    {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter#');
        const studentHeadingText = page.getByText('Student Login')
        expect(studentHeadingText).toBeVisible();

        //Login
        const studentEmail = await page.getByRole('textbox', {name : 'email'}).fill('student@example.com');
        const studentPassword = await page.getByRole('textbox', {name : 'password'}).fill('password');
        const rememberMeCheckbox = await page.getByRole('checkbox',{name : 'remember'}).check()
        const loginButton = await page.getByRole('button', {name : 'Login'}).click();
        await page.pause();

        //Get the URL

        await expect(page).toHaveURL(/login-success/);
        console.log("Login has been successful")
        
    })
}