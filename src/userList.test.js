import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  // render the component
  const users = [
    { name: 'sujay', email: 'sujay@gmail.com' },
    { name: 'sanjay', email: 'sanjay@gmail.com' },
  ];

  render(<UserList users={users} />);

  // screen.logTestingPlaygroundURL(); // to run the playground to select elements.

  // find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  // render the component
  const users = [
    { name: 'sujay', email: 'sujay@gmail.com' },
    { name: 'sanjay', email: 'sanjay@gmail.com' },
  ];

  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
