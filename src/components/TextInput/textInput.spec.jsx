import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of seachValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'seache value'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();

    expect(input.value).toBe('seache value');
  });

  it('should call handleChange on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="" />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = 'the value';

    userEvent.type(input, value);

    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
