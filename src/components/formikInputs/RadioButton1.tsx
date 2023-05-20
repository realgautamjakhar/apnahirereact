import React from "react";
import { Field } from "formik";

const RadioButton1 = ({
  field, // { name, value, onChange, onBlur },
  type = "text",
  label,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => {
  return (
    <>
      <div>
        <Field type="radio" {...field} {...props} className="peer hidden" />
        <label
          htmlFor={props.id}
          className=" inline-flex peer-checked:bg-blue-100 text-xs peer-checked:font-semibold cursor-pointer capitalize peer-checked:border-blue-500 rounded-full px-4 py-2 border border-gray-300"
        >
          {label}
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

export default RadioButton1;
