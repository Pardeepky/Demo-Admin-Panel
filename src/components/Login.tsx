import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { setSession, showToast} from "../common/Util";
import { userLogin } from "../services/api";
import { errorLog } from "../common/Log";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit = async(Credentials: any) => {
    try {
        let resp = await userLogin(Credentials);
        setSession("token", JSON.stringify(resp.data.token));
        navigate("/dashboard");
        showToast("Login Success!");
      }  catch (error) {
      errorLog(error)
      showToast('Invalid Credentials');
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <h2 className="animate__animated animate__slideInDown">Login</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className="animate__animated animate__fadeInLeft" floating>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "This field is required!",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="login-email"
                  placeholder="Enter Email"
                  type="email"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  invalid={!!errors.email}
                  autoComplete= "current-user"
                />
              )}
            />
            <Label for="login-email">Email</Label>
            <FormFeedback>{errors?.email?.message}</FormFeedback>
          </FormGroup>
          <FormGroup className="animate__animated animate__fadeInLeft" floating>
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "This field is required!",
                },
                minLength: {
                  value: 8,
                  message: "Password cannot be less than 8 characterrs!",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="login-password"
                  placeholder="Enter Password"
                  type="password"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  invalid={!!errors.password}
                  autoComplete= "current-password"
                />
              )}
            />
            <Label for="login-password">Password</Label>
            <FormFeedback>{errors?.password?.message}</FormFeedback>
          </FormGroup>
          <Button className="animate__animated animate__fadeInLeft" type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
