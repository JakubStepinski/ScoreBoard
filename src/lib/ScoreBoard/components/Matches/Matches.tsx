import { IMatch } from "@/lib/scoreBoardStore/types"
import { CurrentMatch } from "../CurrentMatch/CurrentMatch";
import './matches.css';

interface IMatches {
    matches: IMatch[];
    removeMatch: (matchId: IMatch['id']) => void;
    setMatchtoEdit: (match: IMatch) => void;
}

export const Matches = ({ matches, removeMatch, setMatchtoEdit }: IMatches) => {
    return (
        <div className="score-board-matches">
            {matches.map(match => (
                <CurrentMatch
                    key={match.id}
                    {...match}
                    onMatchEdit={() => setMatchtoEdit(match)}
                    onMatchRemove={() => removeMatch(match.id)}
                />
            ))}
        </div>
    );
}