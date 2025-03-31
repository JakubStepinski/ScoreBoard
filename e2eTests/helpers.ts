import { Page } from "@playwright/test";

export const addMatch = async (page: Page, homeTeam: string, awayTeam: string) => {
    const scoreBoard = page.getByTestId('score-board');
    const createNewMatchButton = scoreBoard.getByRole('button', { name: 'Create new match' });
  
    await createNewMatchButton.click();
  
    const createNewMatchDialog = page.getByTestId("score-board-create-new-match-modal");
  
    await createNewMatchDialog.getByPlaceholder("Home team").fill(homeTeam);
    await createNewMatchDialog.getByPlaceholder("Away team").fill(awayTeam);
    await createNewMatchDialog.getByRole('button', { name: 'Create' }).click();
}