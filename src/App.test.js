import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('can receive a new user and show it on a list', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const button = screen.getByRole('button');

  await userEvent.type(nameInput, 'sujay');
  await userEvent.type(emailInput, 'sujay@gmail.com');
  await userEvent.click(button);

  const name = screen.getByRole('cell', { name: 'sujay' });
  const email = screen.getByRole('cell', { name: 'sujay@gmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
