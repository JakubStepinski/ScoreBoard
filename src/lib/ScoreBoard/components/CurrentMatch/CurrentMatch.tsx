import { IMatch } from "@/lib/scoreBoardStore/types";
import './currentMatch.css';
import { Button } from "@/lib/Button";

interface CurrentMatchProps extends IMatch {
    onMatchEdit: () => void;
    onMatchRemove: () => void;
}

export const CurrentMatch = ({ awayTeam, awayScore, homeTeam, homeScore, id, onMatchEdit, onMatchRemove }: CurrentMatchProps) => {
    return (
        <div className="score-board-match" data-testid={`score-board-match-${id}`}>
            <div className="score-board-match-info">
                <span className="score-board-match-home" data-testid="score-board-match-home">{homeTeam}</span>
                <span className="score-board-match-result"  data-testid="score-board-match-result">
                    {`${homeScore} - ${awayScore}`}
                </span>
                <span className="score-board-match-away"  data-testid="score-board-match-away">{awayTeam}</span>
            </div>
            <div className="score-board-match-actions">
                <Button onClick={onMatchEdit} variant="warning">Edit score</Button>
                <Button onClick={onMatchRemove} variant="danger">Remove match</Button>
            </div>
        </div>
    );
}