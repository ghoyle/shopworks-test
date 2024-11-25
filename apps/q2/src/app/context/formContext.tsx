import { IFormFieldBasic } from '../types/UserForm';
import { createContext } from 'react';

interface FormContextType {
  setFieldValue?: (value: string, name: string) => void;
  fieldValues: IFormFieldBasic[];
}
const FormContext = createContext<FormContextType>({ fieldValues: [] });
export default FormContext;
