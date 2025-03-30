export interface IMatch {
    awayTeam: string;
    awayScore: number;
    creationDate: string;
    homeScore: number;
    homeTeam: string;
    id: number;
}

export interface IScoreBoardState {
    addNewMatch: (homeTeam: IMatch['homeTeam'], awayTeam: IMatch['awayTeam'], creationDate: IMatch['creationDate']) => void;
    currentMatches: IMatch[];
    editCurrentMatch: (homeScore: IMatch['homeScore'], awayScore: IMatch['awayScore'], id: IMatch['id']) => void;
    getCurrentMatchesSummary: () => IMatch[];
    nextIdToAssign: number;
    removeCurrentMatch: (id: IMatch['id']) => void;
}