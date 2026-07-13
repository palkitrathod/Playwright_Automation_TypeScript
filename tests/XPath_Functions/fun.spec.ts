import {test,expect} from 'playwright/test';

test('Verify the "Make Appointment" is visible', async ({page}) => 
{
  await page.goto('https://katalon-demo-cura.herokuapp.com/');


})