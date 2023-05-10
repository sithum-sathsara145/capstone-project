import { fireEvent, render, screen } from "@testing-library/react";
import Reservations from "./components/Reservations";

test("Renders the BookingForm", () => {
  render(<Reservations />);
  const submitBtn = screen.getByTestId("submitbtn");
  expect(submitBtn).toBeInTheDocument();
});
