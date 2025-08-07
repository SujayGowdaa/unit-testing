import { render, screen } from '@testing-library/react';
import UserForm from './UserForm';
import user from '@testing-library/user-event';

test('It should render 2 input fields and a button', () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // assertion - make sure the component is doing what we expect it to do.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument(1);
});

test('it calls onUserAdd when the form is submitted', async () => {
  const mock = jest.fn(); // mock function
  // render the component
  render(<UserForm onUserAdd={mock} />);

  // find the two inputs
  const [name, email] = screen.getAllByRole('textbox');

  // simulate typing in a name
  await user.type(name, 'sujay');

  // simulate typing in an email
  await user.type(email, 'sujay@email.com');

  // find the button
  const button = screen.getByRole('button');

  // simulate clicking the button
  await user.click(button);

  // assertion to make sure onUserAdd gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'sujay',
    email: 'sujay@email.com',
  });
});
