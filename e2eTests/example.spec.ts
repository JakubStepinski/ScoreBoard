import { test, expect } from '@playwright/test';
import { addMatch } from './helpers';

test.describe('Score Board', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders score board', async ({ page }) => {
    await expect(page.getByTestId('score-board')).toBeVisible();
  });
});

test.describe('Score Board Actions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('start new match and add it to the board', async ({ page }) => {
    const scoreBoard = page.getByTestId('score-board');
    const createNewMatchButton = scoreBoard.getByRole('button', { name: 'Create new match' });

    await createNewMatchButton.click();

    const createNewMatchDialog = page.getByTestId("score-board-create-new-match-modal");
    await expect(createNewMatchDialog).toBeVisible();

    await createNewMatchDialog.getByPlaceholder("Home team").fill('Barcelona');
    await createNewMatchDialog.getByPlaceholder("Away team").fill('Real Madrid');
    await createNewMatchDialog.getByRole('button', { name: 'Create' }).click();

    await expect(createNewMatchDialog).toBeHidden();

    const match = scoreBoard.getByTestId('score-board-match-0');
    await expect(match).toBeVisible();
  });

  test('edit score of current match', async ({ page }) => {
    await addMatch(page, 'Barcelona', 'Real Madrid');

    const match = page.getByTestId('score-board-match-0');
    const editMatchButton = match.getByRole('button', { name: 'Edit score' });

    await editMatchButton.click();

    const editMatchDialog = page.getByTestId("score-board-edit-match-score-modal");

    await editMatchDialog.getByPlaceholder("Home team score").fill('2');
    await editMatchDialog.getByPlaceholder("Away team score").fill('1');
    await editMatchDialog.getByRole('button', { name: 'Update' }).click();

    await expect(match.getByTestId('score-board-match-result')).toHaveText('2 - 1');
  });
});
