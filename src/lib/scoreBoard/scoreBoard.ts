import { createStore } from "zustand";
import { IMatch, IScoreBoardState } from "./types";
import { createNewMatch, setInitialStoreState, sortMatchesByHighestScoreAndLatestCreationDate } from "./utils";

export const createScoreBoardStore = (initialMatches: IMatch[] = []) => {
    return createStore<IScoreBoardState>(((set, get) => ({
        ...setInitialStoreState(initialMatches),
        addNewMatch: (homeTeam, awayTeam, creationDate) => {
            set(state => ({
                currentMatches: [
                    ...state.currentMatches,
                    createNewMatch({ homeTeam, awayTeam, creationDate, id: state.nextIdToAssign }),
                ],
                nextIdToAssign: state.nextIdToAssign + 1,
            }));
        },
        editCurrentMatch: (homeScore, awayScore, id) => {
            set(state => ({
                currentMatches: state.currentMatches.map(currentMatch => currentMatch.id === id ? ({
                    ...currentMatch,
                    homeScore,
                    awayScore,
                }): currentMatch),
            }));
        },
        getCurrentMatchesSummary: () => {
            return sortMatchesByHighestScoreAndLatestCreationDate(get().currentMatches);
        },
        removeCurrentMatch: (id) => {
            set(state => ({
                currentMatches: state.currentMatches.filter(currentMatch => currentMatch.id !== id),
            }));
        },
    })));
}