import { test, expect } from '@playwright/test';

test.describe('Score Board', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders score board', async ({ page }) => {
    await expect(page.getByTestId('score-board')).toBeVisible();
  });
});
