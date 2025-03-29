import { describe, expect, test } from "vitest";

const createScoreBoard = (initialMatches = []) => ({
    getState: () => ({
        currentMatches: initialMatches,
    }),
});

describe('Score Board', () => {
    test('store is initialized', () => {
        const scoreBoard = createScoreBoard();

        expect(scoreBoard.getState().currentMatches).toEqual([]);
    });
    test('new match is created and added to the scoreboard', () => {});
    test('match result is updated', () => {});
    test('finish match in progress and remove it from scoreboard', () => {});
    test('get summary of matches in progress, ordered by total goals then by latest creation date', () => {});
})