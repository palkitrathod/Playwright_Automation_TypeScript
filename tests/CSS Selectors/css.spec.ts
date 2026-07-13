import {test, expect} from '@playwright/test';
{
    test ('Verify CSS Selectors', async ({page}) => 
    {

        await page.goto('https://katalon-demo-cura.herokuapp.com') //https://katalon-demo-cura.herokuapp.com/
        //Clicking on Make Appointment button
        let makeAppointmentButton = page.locator('a[id="btn-make-appointment"]')
        await makeAppointmentButton.click()
        console.log("Make Appointment button clicked");

        //Filling the username and password
        let userName = page.locator('input[name="username"]')
        await userName.fill('John Doe')
        let password = page.locator('input[name="password"]')
        await password.fill('ThisIsNotAPassword')
        let loginButton = page.locator('button[id="btn-login"]')
        await loginButton.click()
        console.log("Login button clicked & Successful login the portal");
     
    })
}