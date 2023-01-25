import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { required, maxLength15, minLength, email } from "./Validations";
import FileInput from "./FileInput";
import renderField from "./RenderField";

const ReduxForm = require("redux-form");

const { Field, reduxForm } = ReduxForm;

let UserForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const navigate = useNavigate();
  const params = useParams();

  const handleCancel = () => {
    reset();
    navigate("/user");
  };

  const setInitialValues = () => {
    props.initialize({
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      email: props.user.email,
      image: props.user.image,
    });
  };

  useEffect(() => {
    if (params.id) {
      setInitialValues();
    }
  }, [props.user]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="user-form">
        <div className="d-flex fields">
          <div className="form-group mx-3">
            <Field
              name="firstName"
              label="First Name"
              component={renderField}
              type="text"
              validate={[required, maxLength15]}
            />
          </div>
          <div>
            <Field
              name="lastName"
              label="Last Name"
              component={renderField}
              type="text"
              validate={[required, maxLength15]}
            />
          </div>
        </div>
        <div className="form-group mx-3 my-3">
          <Field
            name="email"
            label="Email"
            component={renderField}
            type="email"
            validate={[required, email]}
          />
        </div>
        <div className="form-group m-3">
          <Field
            name="image"
            label="Image"
            component={FileInput}
            type="file"
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning"
          disabled={submitting}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-warning"
          style={{ float: "right" }}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "UserForm",
  enableReinitialize: true,
})(UserForm);
