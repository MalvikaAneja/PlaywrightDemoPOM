import { test, expect } from '@playwright/test';
import {loginPage} from '../../pages/login';

test('test', async ({ page }) => {
  const Login=new loginPage(page)

  await Login.goToLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')

  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Username').press('Tab');
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
  // await page.getByRole('link', { name: 'Logout' }).click();
});