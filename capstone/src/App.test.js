import { fireEvent, render, screen } from "@testing-library/react";
import Reservations from "./components/Reservations";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Renders the BookingForm", () => {
  render(<Reservations />);
  const submitBtn = screen.getByTestId("submitbtn");
  expect(submitBtn).toBeInTheDocument();
});
test ("renders app component", ()=>{
  render(<BrowserRouter><App/></BrowserRouter>);
  const title = screen.getAllByText(/Little Lemon/i);
  expect(title).toBeTruthy();
})