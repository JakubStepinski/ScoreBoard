import { IMatch } from "@/lib/scoreBoardStore/types"
import { CurrentMatch } from "./CurrentMatch";

interface IMatches {
    matches: IMatch[];
}

export const Matches = ({ matches }: IMatches) => {
    return matches.map(match => (
        <CurrentMatch {...match} />
    ));
}