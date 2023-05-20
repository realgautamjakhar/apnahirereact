import { useContext, useEffect } from "react";
import { FormContext } from "./FormContext";

const Steps = [
  "Basic Details",
  "Candidate Requirements",
  "Interviewer Information",
  "Select Plan",
];

const Stepper = () => {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
        step.classList.remove("text-gray-700");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="flex flex-wrap items-center w-full gap-4 justify-between bg-white max-w-7xl py-4  mx-auto  p-4">
      {Steps.map((step, index) => {
        return (
          <div
            key={index}
            className={` flex items-center gap-2 text-center font-medium  px-4`}
          >
            <div className="stepper-item text-sm rounded-full w-8 aspect-square flex items-center justify-center text-gray-700">
              {index + 1}
            </div>{" "}
            <p className=" text-xs text-gray-700">{step}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
