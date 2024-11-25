import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './textInput';
import { IFormField } from '../../../../types/UserForm';

describe('TextInput', () => {
  const mockField: IFormField = {
    type: 'text',
    name: 'username',
    label: 'Username',
    onChange: jest.fn(),
    value: '',
  };

  it('should render successfully', () => {
    const { baseElement } = render(<TextInput field={mockField} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have the correct type, name, and placeholder', () => {
    render(<TextInput field={mockField} />);
    const inputElement = screen.getByPlaceholderText('Username');
    expect(inputElement).toHaveProperty('type', 'text');
    expect(inputElement).toHaveProperty('name', 'username');
    expect(inputElement).toHaveProperty('placeholder', 'Username');
  });

  it('should call onChange handler when value changes', () => {
    render(<TextInput field={mockField} />);
    const inputElement = screen.getByPlaceholderText('Username');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(mockField.onChange).toHaveBeenCalled();
  });

  it('should display the correct value', () => {
    const fieldWithValue = { ...mockField, value: 'test value' };
    render(<TextInput field={fieldWithValue} />);
    const inputElement = screen.getByPlaceholderText('Username');
    const elementValue = inputElement.getAttribute('value');
    expect(elementValue).toEqual('test value');
  });
});
