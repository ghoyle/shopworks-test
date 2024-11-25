import { render, screen, fireEvent } from '@testing-library/react';
import FormFieldController from './formFieldController';
import { IFormField } from '../../../types/UserForm';
import FormContext from '../../../context/formContext';

describe('FormFieldController', () => {
  const mockSetFieldValue = jest.fn();
  const mockContext = {
    fieldValues: [{ name: 'username', value: 'testuser' }],
    setFieldValue: mockSetFieldValue,
  };

  const renderWithContext = (field: IFormField) => {
    return render(
      <FormContext.Provider value={mockContext}>
        <FormFieldController field={field} />
      </FormContext.Provider>
    );
  };

  it('should render successfully', () => {
    const mockField: IFormField = {
      type: 'text',
      name: 'username',
      label: 'Username',
      onChange: jest.fn(),
      value: '',
    };
    const { baseElement } = renderWithContext(mockField);
    expect(baseElement).toBeTruthy();
  });

  it('should render a TextInput component for text field type', () => {
    const mockField: IFormField = {
      type: 'text',
      name: 'username',
      label: 'Username',
      onChange: jest.fn(),
      value: '',
    };
    renderWithContext(mockField);
    const inputElement = screen.getByPlaceholderText('Username');
    expect(inputElement).toBeTruthy();
  });

  it('should render a Select component for dropdown field type', () => {
    const mockField: IFormField = {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      onChange: jest.fn(),
      value: '',
      options: ['USA', 'Canada', 'Mexico'],
    };
    renderWithContext(mockField);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeTruthy();
  });

  it('should call setFieldValue when input value changes', () => {
    const mockField: IFormField = {
      type: 'text',
      name: 'username',
      label: 'Username',
      onChange: jest.fn(),
      value: '',
    };
    renderWithContext(mockField);
    const inputElement = screen.getByPlaceholderText('Username');
    fireEvent.change(inputElement, { target: { value: 'newuser' } });
    expect(mockSetFieldValue).toHaveBeenCalledWith('newuser', 'username');
  });

  it('should display the correct value from context', () => {
    const mockField: IFormField = {
      type: 'text',
      name: 'username',
      label: 'Username',
      onChange: jest.fn(),
      value: '',
    };
    renderWithContext(mockField);
    const inputElement = screen.getByPlaceholderText('Username');
    expect(inputElement.getAttribute('value')).toEqual('testuser');
  });
});
