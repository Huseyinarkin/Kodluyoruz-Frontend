import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('renders text in header', () => {
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument();
});

test('list initial values loaded', () => {
  const items = screen.getAllByText("Click to copy emoji");
  expect(items.length).toEqual(20);
});

test('filter by entry', () => {
  const emoji = "100";
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: emoji } });
  expect(screen.getByText(emoji)).toBeInTheDocument();
});

test("Coping clipboard",() => {
  const click= screen.getAllByText("Click to copy emoji").at(0);
  const parent = click.parentElement;
  expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
});