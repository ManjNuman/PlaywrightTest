// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await page.goto('https://playwright.dev/\'');
await page.getByRole('link', { name: 'Docs' }).click();
await page.getByRole('link', { name: 'Installation' }).click();
await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
await page.getByRole('link', { name: 'Running and debugging tests' }).click();
await page.getByRole('link', { name: 'Setting up CI' }).click();
await page.getByRole('link', { name: 'Setting up CI' }).click();
await page.getByRole('heading', { name: 'Create a Repo and Push to' }).click();
await page.getByRole('link', { name: 'VS Code', exact: true }).click();
await page.getByRole('heading', { name: 'Getting StartedDirect link to' }).click();
await page.getByRole('button', { name: 'Playwright Test', exact: true }).click();

});


