import { IMatch } from "@/lib/scoreBoardStore/types"

export const CurrentMatch = ({ id }: IMatch) => {
    return <div data-testId={`score-board-match-${id}`} />;
}