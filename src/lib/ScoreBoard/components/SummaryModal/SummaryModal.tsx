import { IModalProps, Modal } from "@/lib/Modal/Modal";
import { IScoreBoardState } from "@/lib/scoreBoardStore/types";
import { useState } from "react";
import './summaryModal.css';

interface SummaryModalProps extends Omit<IModalProps, 'children' | 'title'> {
    generateSummary: IScoreBoardState['getCurrentMatchesSummary'];
}

export const SummaryModal = ({ generateSummary, ...props }: SummaryModalProps) => {
    const [matches] = useState(() => generateSummary());

    return (
        <Modal title="Match summary" testId="score-board-match-summary-modal" {...props}>
            <ul className="score-board-match-summary-list">
                {matches.length > 0 ? matches.map(({awayScore, awayTeam, homeScore, homeTeam, id}) => (
                    <li key={id}>{`${homeTeam} ${homeScore} - ${awayTeam} ${awayScore}`}</li>
                )) : 'Empty'}
            </ul>
        </Modal>
    )
};