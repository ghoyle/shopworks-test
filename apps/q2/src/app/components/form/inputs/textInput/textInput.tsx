import { IFormField } from '../../../../types/UserForm';

interface TextInputProps {
  field: IFormField;
}
function TextInput(props: TextInputProps) {
  const { field } = props;
  return (
    <input
      type={field.type}
      name={field.name}
      placeholder={field.label}
      onChange={field.onChange}
      value={field.value}
    />
  );
}

export default TextInput;
