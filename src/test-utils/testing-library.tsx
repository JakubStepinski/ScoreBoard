import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const Providers =
  () =>
  ({ children }: { children: React.ReactNode }) => {
    return children;
  };

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: Providers(), ...options }),
});

export * from "@testing-library/react";
export { customRender as render };
