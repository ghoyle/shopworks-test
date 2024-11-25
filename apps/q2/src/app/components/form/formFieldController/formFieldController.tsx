import { IFormField } from '../../../types/UserForm';
import TextInput from '../inputs/textInput/textInput';
import Select from '../inputs/select/select';
import FormContext from '../../../context/formContext';
import { ChangeEvent, useContext } from 'react';

interface FormFieldProps {
  field: IFormField;
}
const switchFieldType = (field: IFormField) => {
  switch (field.type) {
    case 'text':
      return <TextInput field={field} />;
    case 'dropdown':
      return <Select field={field} />;
    default:
      return 'Unknown input type';
  }
};

function FormFieldController(props: FormFieldProps) {
  const { field } = props;
  const { fieldValues, setFieldValue } = useContext(FormContext);

  const fieldValue =
    fieldValues?.find((f) => f.name === field.name)?.value || '';

  const hydratedField = {
    ...field,
    value: fieldValue,
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      setFieldValue && setFieldValue(e.target.value, field.name),
  };
  return (
    <div className={'mb-4'} data-testid="form-field-controller">
      <label
        className={'block text-sm/6 font-medium text-gray-900'}
        htmlFor={field.name}
      >
        {field.label}
      </label>
      {switchFieldType(hydratedField)}
    </div>
  );
}

export default FormFieldController;
