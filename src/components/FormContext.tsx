import { createContext, useState } from "react";
export const FormContext = createContext<any>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
};
