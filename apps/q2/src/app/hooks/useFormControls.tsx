import { useState } from 'react';
import { IUserForm } from '../types/UserForm';

const mapFieldValues = (form: IUserForm) => {
  return form.questions.flatMap((section) =>
    section.fields.map((field) => ({
      name: field.name,
      value: field.value || '',
    }))
  );
};

const useFormControls = (form: IUserForm) => {
  const [fieldValues, setFieldValues] = useState<
    { name: string; value: string }[]
  >(mapFieldValues(form));

  const setFieldValue = (value: string, name: string) => {
    const newFieldValues = fieldValues.map((field) => {
      if (field.name === name) {
        return { ...field, value };
      }
      return field;
    });
    setFieldValues(newFieldValues);
  };
  const printFieldValues = () => {
    const reducedFieldValues = fieldValues.reduce((acc, field) => {
      return { ...acc, [field.name]: field.value };
    }, {});
    console.log({ ...reducedFieldValues });
  };
  return { setFieldValue, fieldValues, printFieldValues };
};

export default useFormControls;
