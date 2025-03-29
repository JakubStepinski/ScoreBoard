import { describe, expect, test } from "vitest";
import { IMatch } from "./types";
import { createScoreBoardStore } from "./scoreBoard";

const mockedMatch = {
    awayTeam: 'TEAM_B',
    awayScore: 0,
    creationDate: '2025-03-29T16:13:24.076Z',
    homeScore: 0,
    homeTeam: 'TEAM_A',
    id: 0,
};

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
        const initialMatches: IMatch[] = [mockedMatch];
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
    test('match result is updated', () => {});
    test('finish match in progress and remove it from scoreboard', () => {});
    test('get summary of matches in progress, ordered by total goals then by latest creation date', () => {});
})