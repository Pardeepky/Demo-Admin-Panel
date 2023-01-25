import React from "react";

const adaptFileEventToValue = (delegate: any) => (e: any) =>
  delegate(e.target.files[0]);

const FileInput = ({
  input,
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  label,
  type,
  meta: omitMeta,
  ...props
}: any) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        {omitValue ? (
          <img src={omitValue} alt="img"></img>
        ) : (
          <input
          className="form-control"
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type={type}
            {...inputProps}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default FileInput;