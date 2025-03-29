import { render, screen } from "@/test-utils/testing-library";
import { Button } from "./Button";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("Button has correct content", async () => {
    render(<Button>test text</Button>);

    expect(
      await screen.findByRole("button", { name: 'test text' }),
    ).toBeInTheDocument();
  });
});
