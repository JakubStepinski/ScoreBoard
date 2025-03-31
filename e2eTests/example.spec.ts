import { test, expect } from '@playwright/test';
import { addMatches } from './helpers';

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
    await addMatches(page, [{ homeTeam: 'Barcelona', awayTeam: 'Real Madrid' }]);

    const match = page.getByTestId('score-board-match-0');
    const editMatchButton = match.getByRole('button', { name: 'Edit score' });

    await editMatchButton.click();

    const editMatchDialog = page.getByTestId("score-board-edit-match-score-modal");

    await editMatchDialog.getByPlaceholder("Home team score").fill('2');
    await editMatchDialog.getByPlaceholder("Away team score").fill('1');
    await editMatchDialog.getByRole('button', { name: 'Update' }).click();

    await expect(match.getByTestId('score-board-match-result')).toHaveText('2 - 1');
  });

  test('remove match from current matches', async ({ page }) => {
    await addMatches(page, [{ homeTeam: 'Barcelona', awayTeam: 'Real Madrid' }]);

    const match = page.getByTestId('score-board-match-0');
    const removeMatchButton = match.getByRole('button', { name: 'Remove match' });

    await removeMatchButton.click();

    await expect(page.getByTestId('score-board-match-0')).not.toBeAttached();
  });

  test('get summary of matches in progress, ordered by total goals respecting latest creation date', async ({ page }) => {
    await addMatches(page, [
      { homeTeam: 'Mexico', awayTeam: 'Canada', homeScore: '0', awayScore: '5' },
      { homeTeam: 'Spain', awayTeam: 'Brazil', homeScore: '10', awayScore: '2' },
      { homeTeam: 'Germany', awayTeam: 'France', homeScore: '2', awayScore: '2' },
      { homeTeam: 'Uruguay', awayTeam: 'Italy', homeScore: '6', awayScore: '6' },
      { homeTeam: 'Argentina', awayTeam: 'Australia', homeScore: '3', awayScore: '1' },
    ]);

    await page.getByRole('button', { name: 'Generate summary' }).click();

    const summaryList = page.getByTestId('score-board-match-summary-modal').locator('ul > li');
    const expectedOrder = [
      'Uruguay 6 - Italy 6',
      'Spain 10 - Brazil 2',
      'Mexico 0 - Canada 5',
      'Argentina 3 - Australia 1',
      'Germany 2 - France 2',
    ];
    await expect(summaryList).toHaveText(expectedOrder);
  });
});
