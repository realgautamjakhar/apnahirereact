import { Field } from "formik";
import React from "react";

const RadioButton2 = ({
  field, // { name, value, onChange, onBlur },
  type = "text",
  label,
  children,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => {
  return (
    <>
      <div>
        <Field type="radio" {...field} {...props} className="peer hidden" />
        <label
          htmlFor={props.id}
          className="grid gap-2  w-full h-full p-4 border-2  border-gray-300 rounded-md cursor-pointer peer-checked:bg-blue-100 peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-50"
        >
          {children}
        </label>
      </div>
      {touched[field.name] && errors[field.name] && (
        <div className=" absolute -bottom-5 left-2 text-xs font-medium text-red-500">
          {errors[field.name]}
        </div>
      )}
    </>
  );
};

export default RadioButton2;
