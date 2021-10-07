import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';
import axios from 'axios';
import $ from 'jquery';
import { Button } from 'bootstrap';


function Form(){

const [prefix,setPrefix] = useState('');
const [fName,setFName] = useState('');
const [lName,setLName] = useState('');
const [addressLine1,setAddressLine1] = useState('');
const [addressLine2,setAddressLine2] = useState('');
const [city,setCity] = useState('');
const [postcode,setPostcode] = useState('');
const [vehicleType,setVehicleType] = useState('');
const [engineSize,setEngineSize] = useState('');
const [additionalDrivers,setAdditionalDrivers] = useState('');
const [commercial,setCommercial] = useState('');
const [registeredState,setRegisteredState] = useState('');
const [vehicleValue,setVehicleValue] = useState('');
const [telephone,setTelephone] = useState('');
const [registrationDate,setRegistrationDate] = useState('');

function updateValue(){
  $("#value").html(`$`+vehicleValue);
}

function validateFormData(formData){
  for (const [key,value] of Object.entries(formData)){
    if (value === ""){
      alert(`Please enter ${key}!`);
      return false;
    }
  }
  return true;
}

const callMockAPI = (e) => {

e.preventDefault();

  const formData = {
    prefix,
    fName,
    lName,
    addressLine1,
    addressLine2,
    city,
    postcode,
    vehicleType,
    engineSize,
    additionalDrivers,
    commercial,
    registeredState,
    vehicleValue,
    telephone,
    registrationDate
  }

  if(!validateFormData(formData)){
    return;
  }
  
  console.log(formData);

  const url = "https://6151d1934a5f22001701d46f.mockapi.io/api/capston";

  axios.post(url,formData)
    .then(response=> console.log(response.data))
    .catch(e=>console.log(e));
}
  
  return( 
<div>
<form>
  <div class="form-group row">
    <label for="prefix" class="col-4 col-form-label">Prefix</label> 
    <div class="col-8">
      <input onChange={e=>setPrefix(e.target.value)} id="prefix" name="prefix" placeholder="Prefix" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="fName" class="col-4 col-form-label">First Name</label> 
    <div class="col-8">
      <input onChange={e=>setFName(e.target.value)} id="fName" name="fName" placeholder="First Name" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="lName" class="col-4 col-form-label">Last Name</label> 
    <div class="col-8">
      <input onChange={e=>setLName(e.target.value)} id="lName" name="lName" placeholder="Last Name" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="lName" class="col-4 col-form-label">Telephone</label> 
    <div class="col-8">
      <input onChange={e=>setTelephone(e.target.value)} id="telephone" name="telephone" placeholder="Telephone" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="addressLine1" class="col-4 col-form-label">Address Line 1</label> 
    <div class="col-8">
      <input onChange={e=>setAddressLine1(e.target.value)} id="addressLine1" name="addressLine1" placeholder="Address Line 1" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="addressLine2" class="col-4 col-form-label">Address Line 2</label> 
    <div class="col-8">
      <input onChange={e=>setAddressLine2(e.target.value)} id="addressLine2" name="addressLine2" type="text" class="form-control" placeholder="Address Line 2"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="city" class="col-4 col-form-label">City</label> 
    <div class="col-8">
      <input onChange={e=>setCity(e.target.value)} id="city" name="city" placeholder="City" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="postcode" class="col-4 col-form-label">Postcode</label> 
    <div class="col-8">
      <input onChange={e=>setPostcode(e.target.value)} id="postcode" name="postcode" placeholder="Postcode" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="vehicleType" class="col-4 col-form-label">Vehicle Type</label> 
    <div class="col-8">
      <select onChange={e=>setVehicleType(e.target.value)} id="vehicleType" name="vehicleType" class="custom-select">
        <option value="cabriolet">Cabriolet</option>
        <option value="coupe">Coupe</option>
        <option value="estate">Estate</option>
        <option value="hatchback">Hatchback</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="engineSize" class="col-4 col-form-label">Engine Size</label> 
    <div class="col-8">
      <select onChange={e=>setEngineSize(e.target.value)} id="engineSize" name="engineSize" class="custom-select">
        <option value="1000">1000cc</option>
        <option value="1600">1600cc</option>
        <option value="2000">2000cc</option>
        <option value="2500">2500cc</option>
        <option value="3000">3000cc</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="additionalDrivers" class="col-4 col-form-label">How many additional drivers?</label> 
    <div class="col-8">
      <select onChange={e=>setAdditionalDrivers(e.target.value)} id="additionalDrivers" name="additionalDrivers" class="custom-select">
        <option value="0">None</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4">Is the vehicle for commercial purposes?</label> 
    <div class="col-8">
      <div class="custom-control custom-radio custom-control-inline">
        <input onChange={e=>setCommercial(e.target.value)} name="commercial" id="commercial_0" type="radio" class="custom-control-input" value="1"/> 
        <label for="commercial_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input onChange={e=>setCommercial(e.target.value)} name="commercial" id="commercial_1" type="radio" class="custom-control-input" value="0"/> 
        <label for="commercial_1" class="custom-control-label">No</label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4">Will the vehicle be used outside of the registered State?</label> 
    <div class="col-8">
      <div class="custom-control custom-radio custom-control-inline">
        <input onChange={e=>setRegisteredState(e.target.value)} name="registeredState" id="registeredState_0" type="radio" class="custom-control-input" value="1"/> 
        <label for="registeredState_0" class="custom-control-label">Yes</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input onChange={e=>setRegisteredState(e.target.value)} name="registeredState" id="registeredState_1" type="radio" class="custom-control-input" value="0"/> 
        <label for="registeredState_1" class="custom-control-label">No</label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="vehicleValue" class="col-4 col-form-label">What is the vehicle's current value?</label> 
    <div class="col-8">
      <input onChange={e=>{setVehicleValue(e.target.valueAsNumber);updateValue();}} id="vehicleValue" name="vehicleValue" placeholder="Value" type="range" class="form-control-range" min="1000" max="100000" step="1000"/>
      <p id="value">$0</p>
    </div>
  </div>
  <div class="form-group row">
    <label for="registrationDate" class="col-4 col-form-label">When was the vehicle first registered?</label> 
    <div class="col-8">
      <input onChange={e=>setRegistrationDate(e.target.valueAsDate)} id="registrationDate" name="registrationDate" type="date" class="form-control"/>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary" onClick={callMockAPI}>Submit</button>
    </div>
  </div>
</form>

<div class="d-flex justify-content-center">
      <Link to="/admin">
        <button class="btn btn-primary" id="adminButton">
          <p>Admin</p>
        </button>
      </Link>
</div>

</div>
);

}
export default Form;
