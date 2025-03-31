import { render, screen } from "@/test-utils/testing-library";
import { CurrentMatch } from "./CurrentMatch";
import { describe, expect, test } from "vitest";

describe("CurrentMatch", () => {
  test("CurrentMatch renders correct values", async () => {
    render((
      <CurrentMatch
        awayScore={3}
        awayTeam="Real"
        homeScore={3}
        homeTeam="Barcelona"
        id={0}
        creationDate={new Date().toISOString()}
      />
    ));

    expect(screen.getByTestId('score-board-match-home')).toHaveTextContent('Barcelona');
    expect(screen.getByTestId('score-board-match-away')).toHaveTextContent('Real');
    expect(screen.getByTestId('score-board-match-result')).toHaveTextContent('3 - 3');
  });
});
