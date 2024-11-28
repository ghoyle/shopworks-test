import { IFormSection } from '../../../types/UserForm';
import FormFieldController from '../formFieldController/formFieldController';

interface FormSectionProps {
  section: IFormSection;
}

function FormSection(props: FormSectionProps) {
  const { section } = props;
  return (
    <fieldset data-testid={'form-section'}>
      <h3>{section.title}</h3>
      {section.fields.map((field) => (
        <FormFieldController field={field} key={field.name} />
      ))}
    </fieldset>
  );
}

export default FormSection;
