import { ChangeEvent } from 'react';

export type TFormFieldType = 'text' | 'dropdown';

export interface IFormFieldBasic {
  name: string;
  value?: string;
}

export interface IFormField extends IFormFieldBasic {
  label: string;
  type: TFormFieldType;
  options?: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface IFormSection {
  title: string;
  fields: IFormField[];
}
export interface IUserForm {
  questions: IFormSection[];
}
