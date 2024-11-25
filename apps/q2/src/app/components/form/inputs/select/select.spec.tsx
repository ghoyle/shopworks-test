import { render, screen, fireEvent } from '@testing-library/react';
import Select from './select';
import { IFormField } from '../../../../types/UserForm';

describe('Select', () => {
  const mockField: IFormField = {
    type: 'dropdown',
    name: 'country',
    label: 'Country',
    onChange: jest.fn(),
    value: '',
    options: ['USA', 'Canada', 'Mexico'],
  };

  it('should render successfully', () => {
    const { baseElement } = render(<Select field={mockField} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have the correct name and value', () => {
    render(<Select field={mockField} />);
    const selectElement = screen.getByTestId(mockField.name);
    expect(selectElement.getAttribute('name')).toEqual('country');
    expect(selectElement).toHaveProperty('value', '');
  });

  it('should render the correct options', () => {
    render(<Select field={mockField} />);
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(4); // Including the default "Select option"
    expect(options[0].innerHTML).toEqual('Select option');
    expect(options[1].innerHTML).toEqual('USA');
    expect(options[2].innerHTML).toEqual('Canada');
    expect(options[3].innerHTML).toEqual('Mexico');
  });

  it('should call onChange handler when value changes', () => {
    render(<Select field={mockField} />);
    const selectElement = screen.getByTestId(mockField.name);
    fireEvent.change(selectElement, { target: { value: 'Canada' } });
    expect(mockField.onChange).toHaveBeenCalled();
  });

  it('should display the correct value', () => {
    const fieldWithValue = { ...mockField, value: 'Mexico' };
    render(<Select field={fieldWithValue} />);
    const selectElement = screen.getByTestId(fieldWithValue.name);
    expect(selectElement).toHaveProperty('value', 'Mexico');
  });
});
