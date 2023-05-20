"use client";
import React, { useContext } from "react";
import FieldLabel from "../formikInputs/FieldLabel";
import { Form, Formik } from "formik";
import { FormContext } from "../FormContext";
import {
  CheckRoundedIcon,
  ClockIcon,
  CoinIcon,
  GuaranteeIcon,
  PersonsIcon,
  VerifiedIcon,
} from "../Icons";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const plans = [
  {
    name: "Small",
    targetApplication: 20,
    price: 200,
    originalPrice: 500,
    bestFor: "1 hire",
    costPerApplication: 10,
    expire: "Expires When target met",
    coinRefund: "Coin returned for less application in 15 days",
  },
  {
    name: "Standard",
    targetApplication: 40,
    price: 400,
    originalPrice: 1000,
    bestFor: "1-4 hire",
    costPerApplication: 10,
    expire: "Expires When target met",
    coinRefund: "Coin returned for less application in 15 days",
  },
  {
    name: "Large",
    targetApplication: 60,
    price: 1200,
    originalPrice: 3000,
    bestFor: "large hiring needs",
    costPerApplication: 8,
    expire: "Expires When target met",
    coinRefund: "Coin returned for less application in 15 days",
  },
];

const SelectPlan = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  return (
    <>
      <Formik
        initialValues={{
          plan: formData.plan || "Small",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = { ...formData, ...values };
          setFormData(data);
          console.log(formData);
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className="grid gap-4 max-w-7xl mx-auto w-full">
            <div className="grid gap-4 bg-white p-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Job Role Preview
                </h2>
                <p className=" text-xs text-gray-700">
                  Who would be connecting with candidates for this job ?
                </p>
              </div>

              {/* Plan Select Pure html and css */}
              <div>
                <FieldLabel>Select your preferred plan</FieldLabel>
                <div className=" grid gap-4 md:grid-cols-3 pt-4">
                  {plans.map((plan) => {
                    return (
                      <div key={plan.name}>
                        <input
                          type="radio"
                          name="plan"
                          id={`${plan.name}-plan`}
                          className="hidden peer"
                          value={plan.name}
                          checked={
                            values.plan.toLowerCase() ===
                            plan.name.toLowerCase()
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            setFieldValue("plan", e.target.value)
                          }
                        />
                        <label
                          htmlFor={`${plan.name}-plan`}
                          className="grid gap-1 border overflow-hidden border-gray-300 peer-checked:border-blue-600 peer-checked:border-2 cursor-pointer rounded-md peer-checked:bg-blue-100 "
                        >
                          <div className=" px-6 py-4 grid gap-1">
                            <h2 className=" text-lg font-medium text-gray-900">
                              {plan.name}
                            </h2>
                            <p className=" text-gray-700 text-sm flex items-center gap-2">
                              <PersonsIcon /> {plan.targetApplication} target
                              applications
                            </p>
                            <div className=" inline-flex gap-2 text-xl items-center">
                              <CoinIcon />{" "}
                              <p className=" line-through ">
                                {plan.originalPrice}
                              </p>
                              <p>{plan.price}</p>
                            </div>
                          </div>
                          <div>
                            <ul className=" pl-4 text-xs text-gray-700 grid gap-2 border-t py-4">
                              <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                                <CoinIcon /> {plan.costPerApplication} per
                                application
                              </li>
                              <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                                <ClockIcon /> {plan.expire}
                              </li>
                              <li className=" text-xs  text-gray-700 grid grid-cols-[auto_1fr] gap-1">
                                <VerifiedIcon /> {plan.coinRefund}
                              </li>
                            </ul>
                          </div>
                          <p className="bg-yellow-100 text-xs text-center py-1 text-gray-700">
                            Best for {plan.bestFor}
                          </p>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className=" bg-blue-100 p-4 flex justify-between ">
                <div className=" grid gap-2">
                  <h2 className=" font-medium">Coin Return Guarantee</h2>
                  <p className=" text-xs text-gray-700">
                    We are adding coins back to your account if you receive less{" "}
                    <br />
                    than the target applications.
                  </p>
                </div>
                <GuaranteeIcon />
              </div>

              <div className=" bg-blue-100 p-4 grid gap-4">
                <h2 className=" text-gray-900 font-medium">Important Tips</h2>
                <ul className=" grid gap-2 text-gray-700">
                  <li className="inline-flex item-center text-xs gap-2">
                    <CheckRoundedIcon /> Applications are subject to jobs
                    attractiveness and competition
                  </li>
                  <li className="inline-flex item-center text-xs gap-2">
                    <CheckRoundedIcon />
                    Renew job once target applications are reached, to get more
                    applications
                  </li>
                  <li className="inline-flex item-center text-xs gap-2">
                    <CheckRoundedIcon />
                    Quick response & correct job information will give much
                    better results
                  </li>
                  <li className="inline-flex item-center text-xs gap-2">
                    <CheckRoundedIcon />
                    De-activate your job once you have filled your position
                  </li>
                  <li className="inline-flex item-center text-xs gap-2">
                    <CheckRoundedIcon />
                    Any unethical practices will be immediately reported to the
                    authorities with your KYC details
                  </li>
                </ul>
              </div>
            </div>

            {/* Step Controller  */}
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
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SelectPlan;
