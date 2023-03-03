import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm'

test('renders the booking form heading', () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
});
