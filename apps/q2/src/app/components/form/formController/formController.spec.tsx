import { render, screen, fireEvent } from '@testing-library/react';
import FormController from './formController';
import { userFormData } from '../../../forms';
import useFormControls from '../../../hooks/useFormControls';

jest.mock('../../../hooks/useFormControls');

describe('FormController', () => {
  const mockSetFieldValue = jest.fn();
  const mockPrintFieldValues = jest.fn();
  const mockUseFormControls = {
    fieldValues: [],
    setFieldValue: mockSetFieldValue,
    printFieldValues: mockPrintFieldValues,
  };

  beforeEach(() => {
    (useFormControls as jest.Mock).mockReturnValue(mockUseFormControls);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<FormController />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the correct number of form sections', () => {
    render(<FormController />);
    const formSections = screen.getAllByTestId('form-section');
    expect(formSections).toHaveLength(userFormData.questions.length);
  });

  it('should call printFieldValues on form submission', () => {
    render(<FormController />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(mockPrintFieldValues).toHaveBeenCalled();
  });
});
