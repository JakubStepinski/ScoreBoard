import { render, screen } from "@/test-utils/testing-library";
import { Modal } from "./Modal";
import { describe, expect, test } from "vitest";

describe("Modal", () => {
  test("Modal is not shown", async () => {
    render((
      <Modal isOpen={false} title="title" onClose={() => {}}>
        testingModal
      </Modal>
    ));

    const modalContent = screen.queryByText('testingModal');
    expect(modalContent).not.toBeInTheDocument();
  });
  test("Modal is shown", async () => {
    render((
      <Modal isOpen title="title" onClose={() => {}}>
        testingModal
      </Modal>
    ));

    const modalContent = screen.queryByText('testingModal');
    expect(modalContent).toBeInTheDocument();
  });
});
