import { test, expect } from '@playwright/test';

test.describe('Score Board', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders score board', async ({ page }) => {
    await expect(page.getByTestId('score-board')).toBeVisible();
  });

  test('start new match and add it to the board', async ({ page }) => {
    const scoreBoard = page.getByTestId('score-board');
    const createNewMatchButton = scoreBoard.getByRole('button', { name: 'Create new match' });

    await createNewMatchButton.click();

    const createNewMatchDialog = page.getByRole("dialog");
    await expect(createNewMatchDialog).toBeVisible();

    await createNewMatchDialog.getByPlaceholder("Home team").fill('Barcelona');
    await createNewMatchDialog.getByPlaceholder("Away team").fill('Real Madrid');
    await createNewMatchDialog.getByRole('button', { name: 'Create' }).click();

    await expect(createNewMatchDialog).toBeHidden();

    const match = scoreBoard.getByTestId('score-board-match-0');
    await expect(match).toBeVisible();
  });
});
