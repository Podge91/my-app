import React  from 'react';
import  TextField  from '../TextField/TextField';
import RangeField from '../RangeField/RangeField';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';
import axios from 'axios';
import * as Yup from 'yup';

import {Formik,Form, yupToFormErrors} from 'formik';


function CarForm(){

  const validate = Yup.object({
    prefix: Yup.string().required('Required'),
    fName: Yup.string().required('Required'),
    lName: Yup.string().required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    vehicleType: Yup.string().required('Required'),
    engineSize: Yup.string().required('Required'),
    additionalDrivers: Yup.string().required('Required'),
    commercial: Yup.string().required('Required'),
    registeredState: Yup.string().required('Required'),
    vehicleValue: Yup.number().required('Required').positive().integer(),
    telephone: Yup.string().required('Required'),
    registrationDate: Yup.string().required('Required'),
    postcode: Yup.string().required('Required')
  })
  
  return( 
<Formik initialValues= {{
  prefix:'',
  fName:'',
  lName:'',
  addressLine1:'',
  addressLine2:'',
  city:'',
  postcode:'',
  vehicleType:'',
  engineSize:'',
  additionalDrivers:'',
  commercial:'',
  registeredState:'',
  vehicleValue:'',
  telephone:'',
  registrationDate:''
}}validationSchema={validate} >
  {formik =>(
    <div>
      <h1 className="my-4 font-wright-bold-display-4">Car Quote Form</h1>
      {console.log(formik.values)}
    <Form>
      <TextField label="Prefix" name="prefix" type="text"/>
      <TextField label="First Name" name="fName" type="text"/>
      <TextField label="Last Name" name="lName" type="text"/>
      <TextField label="Address Line 1" name="addressLine1" type="text"/>
      <TextField label="Address Line 2" name="addressLine2" type="text"/>
      <TextField label="City" name="city" type="text"/>
      <TextField label="Postcode" name="postcode" type="text"/>
      <TextField label="Vehicle Type" name="vehicleType" type="text"/>
      <TextField label="engineSize" name="engineSize" type="text"/>
      <TextField label="Do you wish to add additional Drivers?" name="additionalDrivers" type="text"/>
      <TextField label="Will the vehicle be used for commercial purposes?" name="commercial" type="text"/>
      <TextField label="Will the vehicle be used outside the registered state?" name="registeredState" type="text"/>
      <RangeField label="What is the value of the vehicle?" name="vehicleValue" type="range" min="0" max ="50000" step="1000"/>
      <TextField label="Telephone Number" name="telephone" type="text"/>
      <TextField label="What is the date the vehicle was first registered?" name="registrationDate" type="text"/>
      <button className="btn btn-dark mt-3">Submit</button>
    </Form> 
    </div>
   
  )}
</Formik>
);

}
export default CarForm;
