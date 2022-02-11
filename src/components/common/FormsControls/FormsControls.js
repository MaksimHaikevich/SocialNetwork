import React from "react";
import s from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  validate,
  placeholder,
  name,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        validate={validate}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};