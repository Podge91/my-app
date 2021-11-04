import React from 'react';
import PropTypes from 'prop-types';
import './RadioAdditionalDrivers.css';
import { Field, useField,ErrorMessage} from 'formik';

const RadioAdditionalDrivers = ({ label,...props}) => {

  const [field, meta] = useField(props);


  return(<>
  <label htmlFor={field.name}>{label}</label>
  <br/>
  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input className={`btn-check ${meta.touched && meta.error && 'is-invalid'}`} type="radio" name={field.name}
      {...field} {...props}
      autoComplete="off" value="0" id="btnradio1"/>
  <label class="btn btn-outline-primary" for="btnradio1">0</label>

  <input className={`btn-check ${meta.touched && meta.error && 'is-invalid'}`} type="radio" name={field.name}
      {...field} {...props}
      autoComplete="off" value="1" id="btnradio2"/>
  <label class="btn btn-outline-primary" for="btnradio2">1</label>

  <input className={`btn-check ${meta.touched && meta.error && 'is-invalid'}`} type="radio" name={field.name}
      {...field} {...props}
      autoComplete="off" value="2" id="btnradio3"/>
  <label class="btn btn-outline-primary" for="btnradio3">2</label>

  <input className={`btn-check ${meta.touched && meta.error && 'is-invalid'}`} type="radio" name={field.name}
      {...field} {...props}
      autoComplete="off" value="3" id="btnradio4"/>
  <label class="btn btn-outline-primary" for="btnradio4">3</label>

  <input className={`btn-check ${meta.touched && meta.error && 'is-invalid'}`} type="rradio" name={field.name}
      {...field} {...props}
      autoComplete="off" value="4" id="btnradio5"/>
  <label class="btn btn-outline-primary" for="btnradio5">4</label>
</div>
<ErrorMessage name={field.name}/>
<br/>
</>
);
};


export default RadioAdditionalDrivers;
