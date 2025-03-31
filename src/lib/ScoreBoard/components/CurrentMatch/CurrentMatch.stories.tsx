import type { Meta, StoryObj } from "@storybook/react";
import { CurrentMatch } from "./CurrentMatch";
import { mockedMatches } from "@/lib/scoreBoardStore/mocks";

const meta = {
  title: "Example/CurrentMatch",
  component: CurrentMatch,
} satisfies Meta<typeof CurrentMatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...mockedMatches[0],
  },
};
