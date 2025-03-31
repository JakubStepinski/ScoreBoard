import { IMatch } from "@/lib/scoreBoardStore/types"
import { CurrentMatch } from "../CurrentMatch/CurrentMatch";
import './matches.css';

interface IMatches {
    matches: IMatch[];
    setMatchtoEdit: (match: IMatch) => void;
}

export const Matches = ({ matches, setMatchtoEdit }: IMatches) => {
    return (
        <div className="score-board-matches">
            {matches.map(match => (
                <CurrentMatch key={match.id} {...match} onMatchEdit={() => setMatchtoEdit(match)} />
            ))}
        </div>
    );
}