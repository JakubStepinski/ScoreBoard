import { Page } from "@playwright/test";

interface IaddMatchProps {
    homeTeam: string;
    homeScore?: string;
    awayTeam: string;
    awayScore?: string;
}

export const addMatches = async (page: Page, matches: IaddMatchProps[]) => {
    let index = 0;
    for (const match of matches) {
        const scoreBoard = page.getByTestId('score-board');
        const createNewMatchButton = scoreBoard.getByRole('button', { name: 'Create new match' });
      
        await createNewMatchButton.click();
      
        const createNewMatchDialog = page.getByTestId("score-board-create-new-match-modal");
      
        await createNewMatchDialog.getByPlaceholder("Home team").fill(match.homeTeam);
        await createNewMatchDialog.getByPlaceholder("Away team").fill(match.awayTeam);
        await createNewMatchDialog.getByRole('button', { name: 'Create' }).click();
    
        if (!match.homeScore || !match.awayScore) {
            return;
        }
        
        const matchElement = page.getByTestId(`score-board-match-${index}`);
        index++;
        const editMatchButton = matchElement.getByRole('button', { name: 'Edit score' });

        await editMatchButton.click();

        const editMatchDialog = page.getByTestId("score-board-edit-match-score-modal");
    
        await editMatchDialog.getByPlaceholder("Home team score").fill(match.homeScore);
        await editMatchDialog.getByPlaceholder("Away team score").fill(match.awayScore);
        await editMatchDialog.getByRole('button', { name: 'Update' }).click();
    }
}