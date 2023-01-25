import React from "react";

const renderField = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
  }: any) => (
	<div>
	  <label>{label}</label>
	  <div >
		<input className="form-control" {...input} placeholder={label} type={type} />
	  </div>
	  {touched &&
		((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
  );

export default renderField;