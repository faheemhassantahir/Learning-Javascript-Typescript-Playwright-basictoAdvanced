import {test, expect} from '@playwright/test'

test('Variables ', async ({page}) => {
  let url = 'https://automationexercise.com/login';
  const userNameValue = 'testuser' ;
  const emailavalue ='testuser12@gmail.com';

  await page.goto(url);
  const loginlink =page.getByText('signup /login');
  //await loginlink.click();

  const username =page.getByPlaceholder('Name');
  await username.fill(userNameValue);

  const emailaddress =page.locator('[data-qa="signup-email"]');
  await emailaddress.fill(emailvalue);

  const signupbottom =page.locator('[data-qa="signup-button"]');
  await signupbottom.click();


})