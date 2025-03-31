import { Button } from "@/lib/Button";
import { IModalProps, Modal } from "@/lib/Modal/Modal";
import { IMatch, IScoreBoardState } from "@/lib/scoreBoardStore/types";
import { useCallback, useState } from "react";
import './editMatchScoreModal.css';

interface EditMatchScoreModalProps extends Omit<IModalProps, 'children' | 'title'> {
    onEditScore: IScoreBoardState['editCurrentMatch'];
    match: IMatch;
}

export const EditMatchScoreModal = ({ onEditScore, match, onClose, ...props }: EditMatchScoreModalProps) => {
    const [homeTeamScore, setHomeTeamScore] = useState(match.homeScore.toString());
    const [awayTeamScore, setAwayTeamScore] = useState(match.awayScore.toString());

    const handleEdit = useCallback(() => {
        onEditScore(parseInt(homeTeamScore), parseInt(awayTeamScore), match.id);
    }, [awayTeamScore, homeTeamScore, match.id, onEditScore]);

    return (
        <Modal onClose={onClose} title="Edit match" testId="score-board-edit-match-score-modal" {...props}>
            <div className="score-board-edit-match-score-modal">
                <div className="score-board-edit-match-score-modal-inputs">
                    <div>
                        <div>{match.homeTeam}</div>
                        <input value={homeTeamScore} placeholder="Home team score" onChange={e => setHomeTeamScore(e.target.value)} />
                    </div>
                    <div>
                        <div>{match.awayTeam}</div>
                        <input value={awayTeamScore} placeholder="Away team score" onChange={e => setAwayTeamScore(e.target.value)} />
                    </div>
                </div>
                <Button disabled={!homeTeamScore || !awayTeamScore} onClick={handleEdit}>Update</Button>
            </div>
        </Modal>
    )
};