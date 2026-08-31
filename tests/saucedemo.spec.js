import { test, expect } from '@playwright/test';

test ('should display the correct title', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');

await page.getByXpath('//input[@id="user-name"]').click();
await page.getByXpath('//input[@id="user-name"]').fill('standard_user');
await page.getByXpath('//input[@id="password"]').click();
await page.getByXpath('//input[@id="password"]').fill('secret_sauce');
await page.getByXpath('//input[@id="login-button"]').click();
await expect(page).toHaveTitle('Swag Labs');


});