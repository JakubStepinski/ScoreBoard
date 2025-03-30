import { IMatch } from "./types";

export const setInitialStoreState = (initialMatches: IMatch[]) => ({
    currentMatches: [...initialMatches],
    nextIdToAssign: initialMatches.reduce((currentId, match) => match.id >= currentId ? match.id + 1 : currentId, 0),
})

export const createNewMatch = ({ homeTeam, awayTeam, creationDate, id }: Omit<IMatch, 'awayScore' | 'homeScore'>): IMatch => ({
    awayTeam,
    awayScore: 0,
    creationDate,
    homeTeam,
    homeScore: 0,
    id,
});

export const sortMatchesByHighestScoreAndLatestCreationDate = (matches: IMatch[]) => {
    const matchesToSort = [...matches];

    return matchesToSort.sort((matchA, matchB) => {
        const totalGoalsMatchA = matchA.homeScore + matchA.awayScore;
        const totalGoalsMatchB = matchB.homeScore + matchB.awayScore;

        if (totalGoalsMatchA === totalGoalsMatchB) {
            return new Date(matchB.creationDate).getTime() - new Date(matchA.creationDate).getTime();
        }

        return totalGoalsMatchB - totalGoalsMatchA;
    });
}