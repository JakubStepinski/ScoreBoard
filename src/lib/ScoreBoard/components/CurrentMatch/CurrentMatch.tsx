import { IMatch } from "@/lib/scoreBoardStore/types";
import './currentMatch.css';
import { Button } from "@/lib/Button";

interface CurrentMatchProps extends IMatch {
    onMatchEdit: () => void;
}

export const CurrentMatch = ({ awayTeam, awayScore, homeTeam, homeScore, id, onMatchEdit }: CurrentMatchProps) => {
    return (
        <div className="score-board-match" data-testId={`score-board-match-${id}`}>
            <div className="score-board-match-info">
                <span className="score-board-match-home" data-testId="score-board-match-home">{homeTeam}</span>
                <span className="score-board-match-result"  data-testId="score-board-match-result">
                    {`${homeScore} - ${awayScore}`}
                </span>
                <span className="score-board-match-away"  data-testId="score-board-match-away">{awayTeam}</span>
            </div>
            <div className="score-board-match-actions">
                <Button onClick={onMatchEdit} variant="warning">Edit score</Button>
            </div>
        </div>
    );
}