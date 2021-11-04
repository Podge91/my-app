import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

export const DatePickerField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (<>
    <label htmlFor={field.name}>{label}</label>
    <br />
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
    <br />
    <ErrorMessage name={field.name} />
    </>
  );
};