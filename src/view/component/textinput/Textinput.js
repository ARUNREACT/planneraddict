import React from "react";
import '../textinput/Textinput.styles.css'
// import "../../../utils/validation/uservalidation"
const InputField = ({ value, required, label, isReq, name, placeholder, type, onChange }) => (
 
 <div className="form-group col-9">
  
    {label && <label className="form-label">{label}{isReq ? <span>*</span> : null}</label>}
    <input
    
      type={type}
      value={value}
      name={name}
      isReq={isReq}
      className="form-input"
      placeholder={placeholder}
      onChange={onChange}
      required={required}

    />
  </div>
);

export default InputField;
