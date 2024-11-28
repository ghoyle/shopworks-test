import { IFormField } from '../../../../types/UserForm';

interface SelectProps {
  field: IFormField;
}

export function Select(props: SelectProps) {
  const { field } = props;
  return (
    <select
      className={
        'block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
      }
      id={field.name}
      role={'combobox'}
      name={field.name}
      onChange={(e) => field.onChange && field.onChange(e)}
      value={field.value}
      data-testid={field.name}
    >
      <option value={''}>Select option</option>
      {field.options?.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
