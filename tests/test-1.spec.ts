import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('meat');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('fish');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('milk');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('bana');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByText('bana').dblclick();
  await page.getByRole('textbox', { name: 'Edit' }).fill('banana');
  await page.getByRole('textbox', { name: 'Edit' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'banana' }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('link', { name: 'All' })).toBeVisible();
});