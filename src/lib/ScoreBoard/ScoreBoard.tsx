import { useState } from 'react';
import { Button } from '../Button';
import { ScoreBoardStoreProvider, useScoreBoardStore } from '../scoreBoardStore/ScoreBoardStoreContext';
import { Matches } from './components/Matches/Matches';
import './scoreBoard.css';
import { CreateNewMatchModal } from './components/CreateNewMatchModal/CreateNewMatchModal';

const ScoreBoardContent = () => {
    const currentMatches = useScoreBoardStore((state) => state.currentMatches);
    const addNewMatch = useScoreBoardStore((state) => state.addNewMatch);
    const [isCreateNewMatchModalOpen, setIsCreateJNewMatchModalOpen] = useState(false);

    return (
        <>
            <div className="score-board" data-testId="score-board">
                <h1>Score Board</h1>
                <div className="score-board-actions">
                    <Button onClick={() => setIsCreateJNewMatchModalOpen(true)}>Create new match</Button>
                </div>
                <Matches matches={currentMatches} />
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
        </>
    )
}

export const ScoreBoard = () => (
    <ScoreBoardStoreProvider>
        <ScoreBoardContent />
    </ScoreBoardStoreProvider>
)