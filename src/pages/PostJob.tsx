import { FormProvider } from "../components/FormContext";
import Stepper from "../components/Stepper";
import Step from "../components/Step";

const PostJob = () => {
  return (
    <FormProvider>
      <main className="bg-gray-200 min-h-screen py-10 grid gap-6 w-full">
        <Stepper />
        <Step />
      </main>
    </FormProvider>
  );
};

export default PostJob;
