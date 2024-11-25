import { render } from '@testing-library/react';

import FormController from './formController';

describe('FormController', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormController />);
    expect(baseElement).toBeTruthy();
  });
});
