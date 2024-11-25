import { IFormField } from '../../../../types/UserForm';

interface SelectProps {
  field: IFormField;
}

export function Select(props: SelectProps) {
  const { field } = props;
  return (
    <select
      role={'combobox'}
      name={field.name}
      onChange={field.onChange}
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
