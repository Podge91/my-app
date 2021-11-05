import React from 'react';
import './RadioAdditionalDrivers.css';
import { useField,ErrorMessage,useFormikContext} from 'formik';
import { ButtonGroup, ToggleButton} from 'react-bootstrap';

const RadioAdditionalDrivers = ({ label,...props}) => {

  const [field, meta] = useField(props);
  const { handleChange,handleBlur } = useFormikContext();

  const radios = [{name:'0', value:'0'},
                  {name:'1', value:'1'},
                  {name:'2', value:'2'},
                  {name:'3', value:'3'},
                  {name:'4', value:'4'}
                ];


  return(<>
  <label htmlFor={field.name}>{label}</label>
  <br/>
  <ButtonGroup className="mb-2">
    {radios.map((radio,idx)=>(
      <ToggleButton 
        key={idx}
        id={`radio-${idx}`}
        type='radio'
        variant='primary'
        name={field.name}
        value={radio.value}
        onChange={handleChange}
        onBlur={handleBlur}
        checked={field.value === radio.value}
        >
          {radio.name}
        </ToggleButton>
    ))}
  </ButtonGroup>

<ErrorMessage name={field.name}/>
<br/>
</>
);
};


export default RadioAdditionalDrivers;
