import { userFormData } from '../../../forms';
import FormSection from '../formSection/formSection';
import useFormControls from '../../../hooks/useFormControls';
import FormContext from '../../../context/formContext';

function FormController() {
  const { fieldValues, setFieldValue, printFieldValues } =
    useFormControls(userFormData);
  return (
    <FormContext.Provider value={{ setFieldValue, fieldValues }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          printFieldValues();
        }}
      >
        {userFormData.questions.map((section, index) => (
          <FormSection section={section} key={index} />
        ))}
        <button type={'submit'}>Submit</button>
      </form>
    </FormContext.Provider>
  );
}

export default FormController;
