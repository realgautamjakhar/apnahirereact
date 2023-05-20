import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import BasicDetails from "./form/BasicDetails";
import CandidateRequirement from "./form/CandidateRequirement";
import InterviewInformation from "./form/InterviewInformation";
import SelectPlan from "./form/SelectPlan";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <BasicDetails />;
      break;
    case 1:
      stepContent = <CandidateRequirement />;
      break;
    case 2:
      stepContent = <InterviewInformation />;
      break;
    case 3:
      stepContent = <SelectPlan />;
      break;
    default:
      stepContent = null;
      break;
  }

  return stepContent;
}

export default Step;
