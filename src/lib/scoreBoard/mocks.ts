export const mockedMatches = [
    {
        awayTeam: 'TEAM_B',
        awayScore: 0,
        creationDate: '2025-03-29T16:13:24.076Z',
        homeScore: 0,
        homeTeam: 'TEAM_A',
        id: 0,
    },
    {
        awayTeam: 'TEAM_C',
        awayScore: 0,
        creationDate: '2025-03-29T16:15:24.076Z',
        homeScore: 0,
        homeTeam: 'TEAM_D',
        id: 1,
    },
];

export const mockedMatchesForSummary = [
    {
        awayTeam: 'Canada',
        awayScore: 5,
        creationDate: '2025-03-29T16:13:24.076Z',
        homeScore: 0,
        homeTeam: 'Mexico',
        id: 0,
    },
    {
        awayTeam: 'Brazil',
        awayScore: 2,
        creationDate: '2025-03-29T16:14:24.076Z',
        homeScore: 10,
        homeTeam: 'Spain',
        id: 1,
    },
    {
        awayTeam: 'France',
        awayScore: 2,
        creationDate: '2025-03-29T16:15:24.076Z',
        homeScore: 2,
        homeTeam: 'Germany',
        id: 2,
    },
    {
        awayTeam: 'Italy',
        awayScore: 6,
        creationDate: '2025-03-29T16:16:24.076Z',
        homeScore: 6,
        homeTeam: 'Uruguay',
        id: 3,
    },
    {
        awayTeam: 'Australia',
        awayScore: 1,
        creationDate: '2025-03-29T16:17:24.076Z',
        homeScore: 3,
        homeTeam: 'Argentina',
        id: 4,
    },
];

export const mockedExpectedMatchesForSummary = [
    mockedMatchesForSummary[3],
    mockedMatchesForSummary[1],
    mockedMatchesForSummary[0],
    mockedMatchesForSummary[4],
    mockedMatchesForSummary[2],
];