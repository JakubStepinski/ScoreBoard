import { IMatch } from "@/lib/scoreBoardStore/types"
import { CurrentMatch } from "../CurrentMatch/CurrentMatch";
import './matches.css';

interface IMatches {
    matches: IMatch[];
}

export const Matches = ({ matches }: IMatches) => {
    return (
        <div className="score-board-matches">
            {matches.map(match => (
                <CurrentMatch {...match} />
            ))}
        </div>
    );
}