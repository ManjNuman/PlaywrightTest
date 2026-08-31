import { test  } from '@playwright/test';

test('This is my 1st test ever', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});

test('This is my 2nd test ever', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
  await expect(page.getByRole('heading', { name: 'Before you continue to Google' })).toBeVisible();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
});

test('This is my 3rd test ever',  () => {

  console.log('This is my 3rd test ever');

})

test('This is my 4th test ever', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.locator('iframe[name="app"]').contentFrame().getByRole('link', { name: 'Search, row 1 of 6 and column' }).click();
});

test('This is my 5th test ever', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');     
});

test('This is my 6th test ever', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});