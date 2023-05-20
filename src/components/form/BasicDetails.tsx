"use client";
import React, { useState, useContext } from "react";

import { FieldIcon, HomeIcon, OfficeIcon } from "../Icons";
import TextInput from "../formikInputs/TextInput";
import { Form, Formik, Field } from "formik";
import Select from "react-select";
import FieldLabel from "../formikInputs/FieldLabel";
import { FormContext } from "../FormContext";
import RadioButton1 from "../formikInputs/RadioButton1";
import RadioButton2 from "../formikInputs/RadioButton2";
import {
  companies,
  departmentOptions,
  jobPerks,
  jobTitles,
} from "../../data/Form";

const jobDepartments = [
  {
    label: "Software Engineering",
    value: "Software Engineering",
  },
];

const JobTypes = [
  {
    title: "Full time",
    id: "fullTime",
    value: "full time",
  },
  {
    title: "part time",
    id: "partTime",
    value: "part time",
  },
  {
    title: "Both (Full time and part Time)",
    id: "both",
    value: "both",
  },
];

const BasicDetails = () => {
  const [payType, setPayType] = useState("fixed only");

  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  return (
    <div className="max-w-7xl mx-auto grid gap-4">
      <Formik
        initialValues={{
          company: formData.company || "",
          jobTitle: formData.jobTitle || "",
          jobDepartment: formData.jobTitle || "",
          jobRole: formData.jobRole || "",
          jobType: formData.jobType || "",
          nightJob: formData.nightJob || false,

          workLocation: formData.workLocation || false,

          additionalAddressDetails: "",
          applicationFrom: "",
          joiningFee: "no",
          feeAmount: 0,
          jobParks: formData.jobParks || undefined,
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = { ...formData, ...values };
          setFormData(data);
          setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className=" grid gap-4">
            <div className="grid gap-4 bg-white p-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Job Details
                </h2>
                <p className=" text-xs text-gray-700">
                  We use this information to find the best candidates for the
                  job.
                </p>
                <p className=" text-xs text-red-500">
                  *Marked fields are mandatory
                </p>
              </div>

              <p className=" text-sm text-gray-900">
                Company you belong to aa (Consultancy)
              </p>

              <div className="grid gap-2">
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-gray-900"
                >
                  Company you&apos;re hiring for *
                </label>
                <Select
                  name="company"
                  defaultInputValue={values.company}
                  onChange={(newValue) => {
                    setFieldValue("company", newValue?.value);
                  }}
                  options={companies}
                  placeholder="Select Company"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="jobTitle"
                  className="text-sm font-semibold text-gray-900"
                >
                  Job title / Job role *
                </label>
                <Select
                  name="jobTitle"
                  defaultInputValue={values.jobTitle}
                  onChange={(newValue) => {
                    setFieldValue("jobTitle", newValue?.value);
                  }}
                  options={jobTitles}
                  placeholder="Select Job Roles"
                />
              </div>

              <div className=" grid gap-4 md:grid-cols-2">
                <div className="grid gap-2 ">
                  <label
                    htmlFor="jobDepartment"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Department / Function *
                  </label>
                  <Select
                    name="jobDepartment"
                    defaultInputValue={values.jobDepartment}
                    onChange={(newValue) => {
                      setFieldValue("jobDepartment", newValue?.value);
                    }}
                    options={departmentOptions}
                    placeholder="Select Job Department"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="jobRole"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Category / Role *
                  </label>
                  <Select
                    name="jobRole"
                    defaultInputValue={values.jobRole}
                    onChange={(newValue) => {
                      setFieldValue("jobRole", newValue?.value);
                    }}
                    options={jobDepartments}
                    placeholder="Select Job Role"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="jobType"
                  className="text-sm font-semibold text-gray-900"
                >
                  Type of Job *
                </label>
                <div className="flex gap-4 flex-wrap">
                  {JobTypes.map((type) => {
                    return (
                      <Field
                        component={RadioButton1}
                        key={type.id}
                        name="jobType"
                        id={type.id}
                        value={type.value}
                        label={type.title}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="inline-flex gap-4 items-center pl-2">
                <Field
                  type="checkbox"
                  className="w-4 h-4"
                  id="nightJob"
                  name="nightJob"
                />
                <label htmlFor="nightJob" className="text-sm text-gray-900">
                  This is a night shift job
                </label>
              </div>
            </div>

            <div className=" bg-white p-4 grid gap-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Location
                </h2>
                <p className=" text-xs text-gray-700">
                  Let candidates know where they will be working from.
                </p>
              </div>

              <div className=" grid gap-2">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-gray-900">
                    What is the job location for your candidates? *
                  </label>
                  <div className="gap-6 grid md:grid-cols-3">
                    <Field
                      component={RadioButton2}
                      name="workLocation"
                      id="workFromOffice"
                      value={"work from office"}
                    >
                      <div className="flex gap-2 items-center">
                        <OfficeIcon />
                        <h2 className=" text-gray-900 font-semibold text-sm">
                          Work from office
                        </h2>
                      </div>
                      <p className=" text-xs text-gray-700">
                        Candidates would be required to work from a fixed
                        location
                      </p>
                    </Field>
                    <Field
                      component={RadioButton2}
                      name="workLocation"
                      id="workFromHome"
                      value={"work from home"}
                    >
                      <div className="flex gap-2 items-center">
                        <HomeIcon />
                        <h2 className=" text-gray-900 font-semibold text-sm">
                          Work from home
                        </h2>
                      </div>
                      <p className=" text-xs text-gray-700">
                        Candidates would be required to work from home (their
                        own premises)
                      </p>
                    </Field>
                    <Field
                      component={RadioButton2}
                      name="workLocation"
                      id="fieldJob"
                      value={"field job"}
                    >
                      <div className="flex gap-2 items-center">
                        <FieldIcon />
                        <h2 className=" text-gray-900 font-semibold text-sm">
                          Field jobs
                        </h2>
                      </div>
                      <p className=" text-xs text-gray-700">
                        Candidates would be required to work in the field, with
                        minimal time spent in the office
                      </p>
                    </Field>
                  </div>
                </div>
              </div>

              {values.workLocation === "work from office" && (
                <>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Office address / landmark *
                    </label>
                    <Select />
                    {/* Using gps location is you dont have select for the same  */}
                    <button className=" text-xs bg-gray-100 px-4 py-1 rounded-full text-gray-700 mr-auto">
                      + My Location
                    </button>
                  </div>
                  <div className="grid gap-2">
                    <Field
                      component={TextInput}
                      label="Add Floor / Plot no. / Shop no. (optional)"
                      name="additionalAddressDetails"
                    />
                  </div>
                </>
              )}

              {values.workLocation === "work from home" && (
                <>
                  <div className="grid gap-2">
                    <label
                      htmlFor="applicationFrom"
                      className="text-sm font-semibold text-gray-900"
                    >
                      Receive applications from *
                    </label>
                    <div className="flex gap-4 flex-wrap">
                      <Field
                        component={RadioButton1}
                        name="applicationFrom"
                        value={"specific city"}
                        id={"specificCity"}
                        label={"Specific City"}
                      />
                      <Field
                        component={RadioButton1}
                        name="applicationFrom"
                        value={"anywhere"}
                        id={"anywhere"}
                        label={"Anywhere in India"}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Job City *
                    </label>
                    <Select />
                  </div>
                </>
              )}
            </div>

            <div className=" bg-white p-4 grid gap-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Compensation
                </h2>
                <p className=" text-xs text-gray-700">
                  Job postings with right salary & incentives will help you find
                  the right candidates.
                </p>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="payType"
                  className="text-sm font-semibold text-gray-900"
                >
                  What is the pay type? *
                </label>
                <div className="flex gap-4 flex-wrap">
                  <Field
                    component={RadioButton1}
                    name="payType"
                    id="fixedOnly"
                    value={"fixed only"}
                    label="fixed only"
                  />
                  <Field
                    component={RadioButton1}
                    name="payType"
                    id="fixedIncentive"
                    value={"fixed incentive"}
                    label="fixed + incentive"
                  />
                  <Field
                    component={RadioButton1}
                    name="payType"
                    id="incentiveOnly"
                    value={"incentive only"}
                    label="incentive only"
                  />
                </div>
              </div>

              {/* Conditional Rendering  */}
              {payType === "fixed only" && (
                <>
                  <div className="grid gap-2">
                    <FieldLabel htmlFor="minimumFixedSalary">
                      Fixed salary / month *
                    </FieldLabel>
                    <div className="flex gap-2 items-center ">
                      <Field
                        component={TextInput}
                        type="number"
                        name="minFixedSalary"
                        id="minFixedSalary"
                        placeholder="Minimum Fixed Salary"
                      />
                      <span className="text-xs text-gray-700">To</span>
                      <Field
                        component={TextInput}
                        type="number"
                        name="maxFixedSalary"
                        id="maxFixedSalary"
                        placeholder="Maximum Fixed Salary"
                      />
                    </div>
                  </div>
                </>
              )}

              {payType === "fixed incentive" && (
                <>
                  <div className="grid gap-2">
                    <FieldLabel htmlFor="minimumFixedSalary">
                      Fixed salary / month *
                    </FieldLabel>
                    <div className="flex gap-2 items-center ">
                      <Field
                        component={TextInput}
                        type="number"
                        name="minFixedSalary"
                        id="minFixedSalary"
                        placeholder="Minimum Fixed Salary"
                      />
                      <span className="text-xs text-gray-700">To</span>
                      <Field
                        component={TextInput}
                        type="number"
                        name="maxFixedSalary"
                        id="maxFixedSalary"
                        placeholder="Maximum Fixed Salary"
                      />
                    </div>
                  </div>

                  <Field
                    component={TextInput}
                    type="number"
                    name="incentive"
                    id="incentive"
                    placeholder="Eg. 2000"
                    label=" Average Incentive / month *"
                  />
                </>
              )}
              {payType === "incentive only" && (
                <>
                  <Field
                    component={TextInput}
                    type="number"
                    name="incentive"
                    id="incentive"
                    placeholder="Eg. 2000"
                    label=" Average Incentive / month *"
                  />
                </>
              )}

              <div className=" grid gap-2">
                <FieldLabel>Do you offer any additional perks ?</FieldLabel>
                <Select
                  options={jobPerks}
                  isMulti
                  value={values.jobParks}
                  onChange={(n) => setFieldValue("jobParks", n)}
                />
              </div>

              <div className="grid gap-2">
                <FieldLabel htmlFor="joiningFee">
                  Is there any joining fee or deposit required from the
                  candidate? *
                </FieldLabel>
                <div className="flex gap-4 flex-wrap">
                  <Field
                    component={RadioButton1}
                    name="joiningFee"
                    id="yesJoiningFee"
                    value={"yes"}
                    label="Yes"
                  />
                  <Field
                    component={RadioButton1}
                    name="joiningFee"
                    id="noJoiningFee"
                    value={"no"}
                    label="no"
                  />
                </div>
              </div>

              {values.joiningFee === "yes" && (
                <>
                  <Field
                    component={TextInput}
                    type="number"
                    name="feeAmount"
                    id="feeAmount"
                    placeholder="Eg. 2000"
                  />

                  <div className="grid gap-2">
                    <FieldLabel htmlFor="feePayMethod">
                      When should the fee be paid? *
                    </FieldLabel>
                    <div className="flex gap-4 flex-wrap">
                      <Field
                        component={RadioButton1}
                        name="feePayMethod"
                        id="beforeTheInterview"
                        value={"yes"}
                        label="Before the Interview"
                      />
                      <Field
                        component={RadioButton1}
                        name="feePayMethod"
                        id="afterTheInterview"
                        value={"no"}
                        label="After Job Confirmation"
                      />
                      <Field
                        component={RadioButton1}
                        name="feePayMethod"
                        id="deductedFromSalary"
                        value={"no"}
                        label="Deducted from salary"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className=" flex items-center justify-between gap-6 px-4 bg-white py-4">
              <button
                type="submit"
                className="bg-green-100 text-sm  ml-auto hover:opacity-90 duration-300 ease-linear text-gray-900 py-2 px-6 rounded-full"
                disabled={isSubmitting}
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicDetails;
