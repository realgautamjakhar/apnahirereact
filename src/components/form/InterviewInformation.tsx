"use client";
import React, { useContext } from "react";
import Select from "react-select";
import FieldLabel from "../formikInputs/FieldLabel";
import { Form, Formik, Field } from "formik";
import { FormContext } from "../FormContext";
import RadioButton1 from "../formikInputs/RadioButton1";
import TextInput from "../formikInputs/TextInput";

import {
  CSVIcon,
  CallIcon,
  CheckIcon,
  CrossIcon,
  WebsiteIcon,
  WhatsappIcon,
} from "../Icons";
import CustomRadio from "../inputs/CustomRadio";
import RadioButton2 from "../formikInputs/RadioButton2";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const cities = [
  {
    label: "jaipur",
    value: "jaipur",
  },
  {
    label: "delhi",
    value: "delhi",
  },
];

const InterviewInformation = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  return (
    <>
      <Formik
        initialValues={{
          interviewBy: formData.interviewBy || "myself",
          interviewType: formData.interviewType || "telephonic",
          recruiterName: formData.recruiterName || undefined,
          recruiterNumber: formData.recruiterNumber || undefined,
          recruiterEmail: formData.recruiterEmail || undefined,

          interviewAddress: formData.interviewAddress || undefined,
          interviewCity: formData.interviewCity || undefined,
          interviewCityArea: formData.interviewCityArea || undefined,
          features: formData.features || "call plus whatsapp",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          const data = { ...formData, ...values };
          setFormData(data);
          setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className=" grid gap-4  max-w-7xl mx-auto">
            {/* Interview Details  */}
            <div className="grid gap-4 bg-white p-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Interviewer Details
                </h2>
                <p className=" text-xs text-gray-700">
                  Who would be connecting with candidates for this job ?
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Field
                  component={RadioButton1}
                  name="interviewBy"
                  value="myself"
                  label="myself"
                  id="interviewByMyself"
                />
                <Field
                  component={RadioButton1}
                  name="interviewBy"
                  value="other"
                  label="other"
                  id="interviewByOther"
                />
              </div>

              {values.interviewBy === "other" && (
                <>
                  <Field
                    component={TextInput}
                    name="recruiterName"
                    label={"Recruiter's Name"}
                    placeholder="Enter Full Name"
                  />
                  <div className=" grid md:grid-cols-2 gap-4">
                    <Field
                      component={TextInput}
                      type="number"
                      name="recruiterNumber"
                      label={"HR Whatsapp Number"}
                      placeholder="Enter Number"
                    />
                    <Field
                      component={TextInput}
                      type="email"
                      name="recruiterEmail"
                      label={"Contact Email"}
                      placeholder="Enter Email"
                    />
                  </div>
                </>
              )}
            </div>
            {/* Interview Methods  */}
            <div className="grid gap-4 bg-white p-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Interview method and address
                </h2>
                <p className=" text-xs text-gray-700">
                  Let candidates know how interview will be conducted for this
                  job.
                </p>
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="totalCandidateExperience">
                  Type of Interview
                </FieldLabel>
                <div className="flex gap-4 flex-wrap">
                  <Field
                    component={RadioButton1}
                    name="interviewType"
                    id="fresherOnly"
                    value="in person"
                    label="In Person"
                  />

                  <Field
                    component={RadioButton1}
                    name="interviewType"
                    id="experiencedOnly"
                    value="telephonic"
                    label="telephonic"
                  />
                </div>
              </div>

              {values.interviewType === "in person" && (
                <>
                  <div className=" grid gap-2">
                    <FieldLabel htmlFor="interviewAddress">
                      Interview address *
                    </FieldLabel>
                    <Select
                      id="interviewAddress"
                      options={options}
                      onChange={(newValue) => {
                        setFieldValue("interviewAddress", newValue);
                      }}
                    />
                  </div>
                  <div className=" grid md:grid-cols-2 gap-4">
                    <div className=" grid gap-2 ">
                      <FieldLabel htmlFor="interviewCity">
                        Interview City *
                      </FieldLabel>
                      <Select
                        id="interviewCity"
                        options={cities}
                        defaultInputValue={values.interviewCity}
                        onChange={(newValue) => {
                          setFieldValue("interviewCity", newValue?.value);
                        }}
                      />
                    </div>
                    <div className=" grid gap-2">
                      <FieldLabel htmlFor="interviewCityArea">Area</FieldLabel>
                      <Select
                        id="interviewCityArea"
                        options={options}
                        onChange={(newValue) => {
                          setFieldValue("interviewCityArea", newValue);
                        }}
                      />
                    </div>
                  </div>
                </>
              )}

              <h2 className="text-base font-semibold text-gray-900">
                Company address
              </h2>

              <div className=" grid gap-2 ">
                <FieldLabel htmlFor="companyAddress">
                  Company address
                </FieldLabel>
                <Select
                  id="companyAddress"
                  options={options}
                  onChange={(newValue) => {
                    setFieldValue("companyAddress", newValue);
                  }}
                />
              </div>
              <div className=" grid md:grid-cols-2 gap-4">
                <div className=" grid gap-2">
                  <FieldLabel htmlFor="companyCity">City</FieldLabel>
                  <Select
                    id="companyCity"
                    options={options}
                    onChange={(newValue) => {
                      setFieldValue("companyCity", newValue);
                    }}
                  />
                </div>
                <div className=" grid gap-2 ">
                  <FieldLabel htmlFor="companyCityArea">Area</FieldLabel>
                  <Select
                    id="companyCityArea"
                    options={options}
                    onChange={(newValue) => {
                      setFieldValue("companyCityArea", newValue);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Features  */}
            <div className="grid gap-4 bg-white p-4">
              <div className=" bg-yellow-100 p-4 flex justify-between items-center flex-wrap gap-4">
                <p className=" text-xs text-gray-700 ">
                  How would you like to manage candidates for this job? <br />{" "}
                  You can always change the option later in the job page
                </p>
                <button className=" text-xs text-yellow-600 underline">
                  See How it works?
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Field
                  component={RadioButton2}
                  name="features"
                  id={"callWhatsapp"}
                  value={"call plus whatsapp"}
                >
                  <h2 className="text-sm font-medium inline-flex items-center gap-2 text-gray-900">
                    <CallIcon />
                    Calls + <WhatsappIcon />
                    Whatsapp
                  </h2>
                  <p className=" text-xs  text-gray-700">
                    Stay updated on all platforms for faster hiring
                  </p>
                  <ul className="pl-1 grid gap-2">
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CheckIcon /> Call: Candidates can call you (9am- 6pm)
                    </li>
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CheckIcon />
                      Whatsapp: Apna will send all applications in a single
                      WhatsApp chat
                    </li>
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CheckIcon />
                      Website: Manage applications on website
                    </li>
                  </ul>
                </Field>
                <Field
                  component={RadioButton2}
                  name="features"
                  id={"whatsapp"}
                  value={"whatsapp"}
                >
                  <h2 className="text-sm font-medium inline-flex items-center gap-2 text-gray-900">
                    <WhatsappIcon />
                    Whatsapp
                  </h2>
                  <p className=" text-xs  text-gray-700">
                    Receive updates on WhatsApp from Apna without candidate
                    calls
                  </p>
                  <ul className="pl-1 grid gap-2">
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CrossIcon /> Call: Candidates cannot call you directly
                    </li>
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CheckIcon /> Whatsapp: Apna will send all applications in
                      a single WhatsApp chat
                    </li>
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CheckIcon /> Website: Manage applications on website
                    </li>
                  </ul>
                </Field>
                <Field
                  component={RadioButton2}
                  name="features"
                  id={"websiteCsv"}
                  value={"Website plus csv"}
                >
                  <h2 className="text-sm font-medium inline-flex items-center gap-2 text-gray-900">
                    <WebsiteIcon /> Website + <CSVIcon /> CSV Download
                  </h2>
                  <p className=" text-xs  text-gray-700">
                    Manage applications on the website without candidate calls &
                    WhatsApp from Apna
                  </p>
                  <ul className="pl-1 grid gap-2">
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CrossIcon />
                      Call: Candidates cannot call you directly
                    </li>
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CrossIcon /> Whatsapp: Apna or candidates will not be
                      able to send you WhatsApp directly
                    </li>
                    <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                      <CheckIcon />
                      Website: Manage applications on the website along with
                      Excel download option
                    </li>
                  </ul>
                </Field>
              </div>
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

export default InterviewInformation;
