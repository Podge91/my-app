import { Field, useField} from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import './RadioYesNo.css';

const RadioYesNo = ({ label, ...props}) => {

  const [field, meta] = useField(props);


  return (<>
  <label htmlFor={field.name}>{label}</label>
  <br/>
  <Field as={Form.Select} name={field.name}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </Field>
  <br/>
  </>
  )

}
export default RadioYesNo;