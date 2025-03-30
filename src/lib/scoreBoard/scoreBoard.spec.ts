import { describe, expect, test } from "vitest";
import { IMatch } from "./types";
import { createScoreBoardStore } from "./scoreBoard";
import { mockedExpectedMatchesForSummary, mockedMatches, mockedMatchesForSummary } from "./mocks";

describe('Score Board', () => {
    test('store is initialized', () => {
        const scoreBoard = createScoreBoardStore();

        expect(scoreBoard.getState().currentMatches).toEqual([]);
    });
    test('new match is created and added to the scoreboard', () => {
        const scoreBoard = createScoreBoardStore();
        const creationDate = new Date().toISOString();

        scoreBoard.getState().addNewMatch('TEAM_A', 'TEAM_B', creationDate);

        expect(scoreBoard.getState().currentMatches).toEqual([{
            awayTeam: 'TEAM_B',
            awayScore: 0,
            creationDate,
            homeScore: 0,
            homeTeam: 'TEAM_A',
            id: 0,
        }]);
    });
    test('new match is created and added to the scoreboard as second match', () => {
        const initialMatches: IMatch[] = [mockedMatches[0]];
        const scoreBoard = createScoreBoardStore(initialMatches);
        const creationDate = new Date().toISOString();

        scoreBoard.getState().addNewMatch('TEAM_C', 'TEAM_D', creationDate);

        expect(scoreBoard.getState().currentMatches).toEqual([
            initialMatches[0],
            {
                awayTeam: 'TEAM_D',
                awayScore: 0,
                creationDate,
                homeScore: 0,
                homeTeam: 'TEAM_C',
                id: 1,
            },
        ]);
    });
    test('match result is updated', () => {
        const initialMatches: IMatch[] = [...mockedMatches];
        const scoreBoard = createScoreBoardStore(initialMatches);

        scoreBoard.getState().editCurrentMatch(3, 4, 0);

        expect(scoreBoard.getState().currentMatches).toEqual([
            {
                ...initialMatches[0],
                homeScore: 3,
                awayScore: 4,
            },
            initialMatches[1],
        ]);
    });
    test('finish match in progress and remove it from scoreboard', () => {
        const initialMatches: IMatch[] = [...mockedMatches];
        const scoreBoard = createScoreBoardStore(initialMatches);

        scoreBoard.getState().removeCurrentMatch(0);
        
        expect(scoreBoard.getState().currentMatches).toEqual([
            initialMatches[1],
        ]);
    });
    test('get summary of matches in progress, ordered by total goals respecting latest creation date', () => {
        const initialMatches: IMatch[] = [...mockedMatchesForSummary];
        const scoreBoard = createScoreBoardStore(initialMatches);

        const summary = scoreBoard.getState().getCurrentMatchesSummary();

        expect(summary).toEqual(mockedExpectedMatchesForSummary);
    });
});