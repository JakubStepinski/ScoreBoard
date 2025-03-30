import { ScoreBoardStoreProvider, useScoreBoardStore } from '../scoreBoardStore/ScoreBoardStoreContext';
import { Matches } from './components/Matches';
import './scoreBoard.css';

const ScoreBoardContent = () => {
    const currentMatches = useScoreBoardStore((state) => state.currentMatches);

    return (
        <div className="score-board" data-testId="score-board">
            <h1>Score Board</h1>
            <Matches matches={currentMatches} />
        </div>
    )
}

export const ScoreBoard = () => (
    <ScoreBoardStoreProvider>
        <ScoreBoardContent />
    </ScoreBoardStoreProvider>
)