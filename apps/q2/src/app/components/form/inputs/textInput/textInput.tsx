import { IFormField } from '../../../../types/UserForm';

interface TextInputProps {
  field: IFormField;
}
function TextInput(props: TextInputProps) {
  const { field } = props;
  return (
    <input
      className={
        'block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
      }
      id={field.name}
      type={field.type}
      name={field.name}
      placeholder={field.label}
      onChange={field.onChange}
      value={field.value}
    />
  );
}

export default TextInput;
