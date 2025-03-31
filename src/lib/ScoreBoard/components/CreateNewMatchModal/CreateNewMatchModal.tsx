import { Button } from "@/lib/Button";
import { IModalProps, Modal } from "@/lib/Modal/Modal";
import { IScoreBoardState } from "@/lib/scoreBoardStore/types";
import { useCallback, useState } from "react";
import './createNewMatchModal.css';

interface CreateNewMatchModalProps extends Omit<IModalProps, 'children' | 'title'> {
    onCreateNewMatch: IScoreBoardState['addNewMatch'];
}

export const CreateNewMatchModal = ({ onCreateNewMatch, onClose, ...props }: CreateNewMatchModalProps) => {
    const [homeTeamName, setHomeTeamName] = useState('');
    const [awayTeamName, setAwayTeamName] = useState('');

    const handleCreate = useCallback(() => {
        onCreateNewMatch(homeTeamName, awayTeamName, new Date().toISOString());
    }, [awayTeamName, homeTeamName, onCreateNewMatch]);

    return (
        <Modal onClose={onClose} title="Create new match" testId="score-board-create-new-match-modal" {...props}>
            <div className="score-board-create-new-match-modal">
                <div className="score-board-create-new-match-modal-inputs">
                    <input value={homeTeamName} placeholder="Home team" onChange={e => setHomeTeamName(e.target.value)} />
                    <input value={awayTeamName} placeholder="Away team" onChange={e => setAwayTeamName(e.target.value)} />
                </div>
                <Button disabled={!homeTeamName || !awayTeamName} onClick={handleCreate}>Create</Button>
            </div>
        </Modal>
    )
};