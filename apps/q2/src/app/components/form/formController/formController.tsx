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
        <button
          className={
            'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          }
          type={'submit'}
        >
          Submit
        </button>
      </form>
    </FormContext.Provider>
  );
}

export default FormController;
