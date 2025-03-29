import { createStore } from "zustand";
import { IMatch } from "./types";

const setInitial = (initialMatches: IMatch[]) => ({
    currentMatches: [...initialMatches],
    nextIdToAssign: initialMatches.reduce((acc, match) => match.id >= acc ? match.id + 1 : acc, 0),
})

const createNewMatch = ({ homeTeam, awayTeam, creationDate, id }: Omit<IMatch, 'awayScore' | 'homeScore'>): IMatch => ({
    awayTeam,
    awayScore: 0,
    creationDate,
    homeTeam,
    homeScore: 0,
    id,
});

interface IScoreBoardState {
    addNewMatch: (homeTeam: IMatch['homeTeam'], awayTeam: IMatch['awayTeam'], creationDate: IMatch['creationDate']) => void;
    currentMatches: IMatch[];
    nextIdToAssign: number;
}

export const createScoreBoardStore = (initialMatches: IMatch[] = []) => {
    return createStore<IScoreBoardState>((set => ({
        ...setInitial(initialMatches),
        addNewMatch: (homeTeam, awayTeam, creationDate) => {
            set(state => ({
                currentMatches: [
                    ...state.currentMatches,
                    createNewMatch({ homeTeam, awayTeam, creationDate, id: state.nextIdToAssign }),
                ],
                nextIdToAssign: state.nextIdToAssign + 1,
            }))
        },
    })));
}