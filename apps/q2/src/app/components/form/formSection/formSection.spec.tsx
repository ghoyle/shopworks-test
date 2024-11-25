import { render, screen } from '@testing-library/react';
import FormSection from './formSection';
import { IFormSection } from '../../../types/UserForm';

describe('FormSection', () => {
  const mockSection: IFormSection = {
    title: 'User Information',
    fields: [
      {
        type: 'text',
        name: 'username',
        label: 'Username',
        onChange: jest.fn(),
        value: '',
      },
      {
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        onChange: jest.fn(),
        value: '',
        options: ['USA', 'Canada', 'Mexico'],
      },
    ],
  };

  it('should render successfully', () => {
    const { baseElement } = render(<FormSection section={mockSection} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the section title', () => {
    render(<FormSection section={mockSection} />);
    const titleElement = screen.getByText('User Information');
    expect(titleElement).toBeTruthy();
  });

  it('should render the correct number of FormFieldController components', () => {
    render(<FormSection section={mockSection} />);
    const formFieldControllers = screen.getAllByTestId('form-field-controller');
    expect(formFieldControllers).toHaveLength(mockSection.fields.length);
  });
});
