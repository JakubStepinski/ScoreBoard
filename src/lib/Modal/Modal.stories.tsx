import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    isOpen: { options: [true, false] },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "modal content",
    onClose: () => {},
    title: 'modal title'
  },
};
