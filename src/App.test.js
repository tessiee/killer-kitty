import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Killer Kitty", () => {
  render(<App />);
  const killerKittyElement = screen.getByText(/Killer Kitty/);
  expect(killerKittyElement).toBeInTheDocument();
});
