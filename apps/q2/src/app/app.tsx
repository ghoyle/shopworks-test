import FormController from './components/form/formController/formController';

export function App() {
  return (
    <div
      className={
        'max-w-md flex min-h-full flex-1 flex-col justify-center mx-auto px-6 py-12 lg:px-8'
      }
    >
      <h1>Q2</h1>
      <FormController />
    </div>
  );
}

export default App;
