"use client";
import React, { useContext } from "react";
import Select from "react-select";
import FieldLabel from "../formikInputs/FieldLabel";
import { Form, Formik, Field } from "formik";
import { FormContext } from "../FormContext";
import TextArea from "../formikInputs/TextArea";
import RadioButton2 from "../formikInputs/RadioButton2";
import RadioButton1 from "../formikInputs/RadioButton1";
import TextInput from "../formikInputs/TextInput";

const educationOptions = [
  { value: "10thAndBelow", label: "10th and below" },
  { value: "12thPass", label: "12th pass" },
  { value: "diploma", label: "Diploma" },
];

const degreeOptions = [
  { label: "Bachelor's Degree", value: "Bachelor's Degree" },
  { label: "Master's Degree", value: "Master's Degree" },
  { label: "Ph.D.", value: "Ph.D." },
  { label: "Associate's Degree", value: "Associate's Degree" },
  { label: "Professional Degree", value: "Professional Degree" },
  { label: "High School Diploma", value: "High School Diploma" },
  { label: "Vocational Training", value: "Vocational Training" },
  { label: "Certification", value: "Certification" },
  { label: "No Degree Required", value: "No Degree Required" },
];

const jobSkills = [
  { label: "Communication Skills", value: "Communication Skills" },
  { label: "Problem-Solving", value: "Problem-Solving" },
  { label: "Leadership", value: "Leadership" },
  { label: "Time Management", value: "Time Management" },
  { label: "Adaptability", value: "Adaptability" },
  { label: "Teamwork", value: "Teamwork" },
  { label: "Critical Thinking", value: "Critical Thinking" },
  { label: "Creativity", value: "Creativity" },
  { label: "Analytical Skills", value: "Analytical Skills" },
  { label: "Attention to Detail", value: "Attention to Detail" },
  { label: "Technical Proficiency", value: "Technical Proficiency" },
  { label: "Organizational Skills", value: "Organizational Skills" },
  { label: "Negotiation", value: "Negotiation" },
  { label: "Presentation Skills", value: "Presentation Skills" },
  { label: "Customer Service", value: "Customer Service" },
  { label: "Project Management", value: "Project Management" },
  { label: "Sales Skills", value: "Sales Skills" },
  { label: "Research Skills", value: "Research Skills" },
  { label: "Coding/Programming", value: "Coding/Programming" },
  { label: "Data Analysis", value: "Data Analysis" },
];

const CandidateRequirement = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  return (
    <>
      <Formik
        initialValues={{
          englishLevel: formData.englishLevel || "no english",
          totalCandidateExperience: formData.totalCandidateExperience || "any",
          ageSpecificCriteria: formData.ageSpecificCriteria || "no",
          minAge: formData.minAge || undefined,
          maxAge: formData.maxAge || undefined,
          minimumEducation: formData.minimumEducation || "diploma",
          degree: formData.degree || undefined,
          candidateGender: formData.candidateGender || "both",
          jobDescription: formData.jobDescription || undefined,
          jobSkills: formData.jobSkills || undefined,
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = { ...formData, ...values };
          setFormData(data);
          setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className=" grid gap-4  max-w-7xl mx-auto">
            <div className="grid gap-4 bg-white p-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Candidate Requirements
                </h2>
                <p className=" text-xs text-gray-700">
                  We’ll use these requirement details to make your job visible
                  to the right candidates.
                </p>
              </div>

              <div className=" grid gap-2">
                <FieldLabel htmlFor="minimumEducation">
                  Minimum Education *
                </FieldLabel>
                <Select
                  id="minimumEducation"
                  options={educationOptions}
                  value={values.minimumEducation}
                  onChange={(n) => setFieldValue("minimumEducation", n)}
                />
              </div>
              {values.minimumEducation?.value === "diploma" && (
                <div className=" grid gap-2">
                  <FieldLabel htmlFor="degree">
                    Degree preference (optional)
                  </FieldLabel>
                  <Select
                    id="degree"
                    value={values.degree}
                    options={degreeOptions}
                    onChange={(n) => setFieldValue("degree", n)}
                    isMulti
                  />
                </div>
              )}

              <div className="grid gap-2">
                <FieldLabel htmlFor="candidateGender">Gender *</FieldLabel>
                <div className="flex gap-4 flex-wrap">
                  <Field
                    component={RadioButton1}
                    name="candidateGender"
                    id={"male"}
                    value={"male"}
                    label={"male"}
                  />
                  <Field
                    component={RadioButton1}
                    name="candidateGender"
                    id={"female"}
                    value={"female"}
                    label={"female"}
                  />
                  <Field
                    component={RadioButton1}
                    name="candidateGender"
                    id={"both"}
                    value={"both"}
                    label={"both"}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="ageSpecificCriteria">
                  Any specific age criteria? *
                </FieldLabel>
                <div className="flex gap-4 flex-wrap">
                  <Field
                    component={RadioButton1}
                    name="ageSpecificCriteria"
                    id={"yesAgeCriteria"}
                    value={"yes"}
                    label={"yes"}
                  />
                  <Field
                    component={RadioButton1}
                    name="ageSpecificCriteria"
                    id={"noAgeCriteria"}
                    value={"no"}
                    label={"no"}
                  />
                </div>
              </div>

              {values.ageSpecificCriteria === "yes" && (
                <>
                  <Field
                    component={TextInput}
                    type="number"
                    name="minAge"
                    placeholder="18"
                    label="Minimum Age Req."
                    min={18}
                  />
                  <Field
                    component={TextInput}
                    label="Maximum Age Req."
                    type="number"
                    placeholder="60"
                    min={18}
                    name="maxAge"
                  />
                </>
              )}

              <div className="grid gap-2">
                <FieldLabel htmlFor="totalCandidateExperience">
                  Total experience required *
                </FieldLabel>
                <div className="flex gap-4 flex-wrap">
                  <Field
                    component={RadioButton1}
                    name="totalCandidateExperience"
                    id={"fresherOnly"}
                    value={"fresher only"}
                    label={"Fresher Only"}
                  />
                  <Field
                    component={RadioButton1}
                    name="totalCandidateExperience"
                    id={"experiencedOnly"}
                    value={"experienced only"}
                    label={"Experienced Only"}
                  />
                  <Field
                    component={RadioButton1}
                    name="totalCandidateExperience"
                    id={"anyExperience"}
                    value={"any"}
                    label={"any"}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="englishLevel">
                  English level required *
                </FieldLabel>
                <div className="grid md:grid-cols-4 gap-4">
                  <Field
                    name="englishLevel"
                    id={"noEnglish"}
                    value={"no english"}
                    component={RadioButton2}
                  >
                    <h2 className=" text-sm font-medium text-gray-900">
                      No English
                    </h2>
                  </Field>
                  <Field
                    name="englishLevel"
                    id={"basicEnglish"}
                    value={"basic english"}
                    component={RadioButton2}
                  >
                    <h2 className=" text-sm font-medium text-gray-900">
                      Basic English
                    </h2>
                    <p className=" text-xs  text-gray-700">
                      Candidate can understand and read English sentences
                    </p>
                  </Field>
                  <Field
                    name="englishLevel"
                    id={"intermediateEnglish"}
                    value={"intermediate english"}
                    component={RadioButton2}
                  >
                    <h2 className=" text-sm font-medium text-gray-900">
                      Intermediate English
                    </h2>
                    <p className=" text-xs  text-gray-700">
                      Candidate can speak in English on some topics
                    </p>
                  </Field>
                  <Field
                    name="englishLevel"
                    id={"advanceEnglish"}
                    value={"advance english"}
                    component={RadioButton2}
                  >
                    <h2 className=" text-sm font-medium text-gray-900">
                      Advanced English
                    </h2>
                    <p className=" text-xs  text-gray-700">
                      Candidate can understand and speak English fluently
                    </p>
                  </Field>
                </div>
              </div>
              <div className=" grid gap-2">
                <FieldLabel htmlFor="jobSkills">
                  Skills preference (optional)
                </FieldLabel>{" "}
                <p className=" text-gray-700 text-xs">
                  You can add up to 10 key skills to make your job visible to
                  the right candidates.
                </p>
                <Select
                  id="jobSkills"
                  value={values.jobSkills}
                  options={jobSkills}
                  onChange={(n) => setFieldValue("jobSkills", n)}
                  isMulti
                />
              </div>
            </div>

            <div className="grid gap-4 bg-white p-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Job Description
                </h2>
                <p className=" text-xs text-gray-700">
                  Describe the responsibilities of this job and other specific
                  requirements here.
                </p>
              </div>
              <Field
                component={TextArea}
                name="jobDescription"
                label="Job Description"
                placeholder="Job Description"
              />
            </div>

            <div className=" flex items-center justify-between gap-6 px-4 bg-white py-4">
              <button
                type="button"
                className="  bg-red-100 text-sm hover:opacity-90 duration-300 ease-linear text-gray-900 py-2 px-6 rounded-full"
                onClick={() => setActiveStepIndex(activeStepIndex - 1)}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-100 text-sm  hover:opacity-90 duration-300 ease-linear text-gray-900 py-2 px-6 rounded-full"
                disabled={isSubmitting}
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CandidateRequirement;
