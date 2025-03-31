import { useState } from 'react';
import { Button } from '../Button';
import { ScoreBoardStoreProvider, useScoreBoardStore } from '../scoreBoardStore/ScoreBoardStoreContext';
import { Matches } from './components/Matches/Matches';
import './scoreBoard.css';
import { CreateNewMatchModal } from './components/CreateNewMatchModal/CreateNewMatchModal';
import { EditMatchScoreModal } from './components/EditMatchScoreModal/EditMatchScoreModal';
import { IMatch } from '../scoreBoardStore/types';

const ScoreBoardContent = () => {
    const currentMatches = useScoreBoardStore((state) => state.currentMatches);
    const addNewMatch = useScoreBoardStore((state) => state.addNewMatch);
    const editCurrentMatch = useScoreBoardStore((state) => state.editCurrentMatch);
    const removeCurrentMatch = useScoreBoardStore((state) => state.removeCurrentMatch);
    const [isCreateNewMatchModalOpen, setIsCreateJNewMatchModalOpen] = useState(false);
    const [matchToEdit, setMatchToEdit] = useState<IMatch | null>(null);

    return (
        <>
            <div className="score-board" data-testid="score-board">
                <h1>Score Board</h1>
                <div className="score-board-actions">
                    <Button onClick={() => setIsCreateJNewMatchModalOpen(true)}>Create new match</Button>
                </div>
                <Matches matches={currentMatches} setMatchtoEdit={setMatchToEdit} removeMatch={removeCurrentMatch} />
            </div>
            {isCreateNewMatchModalOpen && (
                <CreateNewMatchModal
                    isOpen
                    onClose={() => setIsCreateJNewMatchModalOpen(false)}
                    onCreateNewMatch={(homeTeam, awayTeam, timestamp) => {
                        addNewMatch(homeTeam, awayTeam, timestamp);
                        setIsCreateJNewMatchModalOpen(false);
                    }}
                />
            )}
            {matchToEdit && (
                <EditMatchScoreModal
                    isOpen
                    match={matchToEdit}
                    onClose={() => setMatchToEdit(null)}
                    onEditScore={(homeScore, awayScore, id) => {
                        editCurrentMatch(homeScore, awayScore, id);
                        setMatchToEdit(null);
                    }}
                />
            )}
        </>
    )
}

export const ScoreBoard = () => (
    <ScoreBoardStoreProvider>
        <ScoreBoardContent />
    </ScoreBoardStoreProvider>
)