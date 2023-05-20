import React from "react";
import FieldLabel from "./FieldLabel";

const TextArea = ({
  field, // { name, value, onChange, onBlur },
  type = "text",
  label,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => {
  return (
    <div className="grid gap-2">
      {label && <FieldLabel htmlFor={props.id}>{label}</FieldLabel>}
      <textarea
        {...field}
        {...props}
        type={type}
        rows={5}
        className="py-2 px-4 border border-gray-300 rounded-md w-full"
      />
      {touched[field.name] && errors[field.name] && (
        <div className=" absolute -bottom-5 left-2 text-xs font-medium text-red-500">
          {errors[field.name]}
        </div>
      )}
    </div>
  );
};

export default TextArea;
