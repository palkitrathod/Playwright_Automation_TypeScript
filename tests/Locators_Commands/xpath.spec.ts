import {test,expect} from 'playwright/test'



test('Verify the "Make Appointment" is visible', async ({page}) => 
{
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  let makeAppointmentButton =  page.locator('//a[@id="btn-make-appointment"]');
  await makeAppointmentButton.click();
  console.log("Make Appointment button clicked");


  let userName = page.locator('//input[@id="txt-username"]');
  await userName.fill('John Doe');
  let password = page.locator('//input[@id="txt-password"]');
  await password.fill('ThisIsNotAPassword');
  let LoginButton = page.locator('//button[@id="btn-login"]');
  await LoginButton.click();
  console.log("Login button clicked & Successful login the portal");
})
