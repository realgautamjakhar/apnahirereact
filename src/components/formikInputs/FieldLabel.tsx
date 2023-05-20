import React from "react";

const FieldLabel = (
  props: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
) => {
  return (
    <label {...props} className="text-sm font-semibold text-gray-900">
      {props.children}
    </label>
  );
};

export default FieldLabel;
