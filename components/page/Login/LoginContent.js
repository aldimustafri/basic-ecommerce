import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import _ from "lodash/fp";
import {
  Button, H1, InputFields, LoginForm,
} from "./LoginContent.style";
import { LoginAction } from "../../../redux/action/LoginAction";

function LoginContent() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register, handleSubmit, errors,
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(LoginAction({
      email: data.email,
      password: data.password,
    }));

    router.push("/homepage");
  };

  return (
    <>
      <LoginForm>
        <H1>Login</H1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputFields placeholder="Email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          {_.get("email.type", errors) === "required" && (
            <p style={{ color: "#bf1650" }}>Email is required</p>
          )}
          {_.get("email.type", errors) === "pattern" && (
            <p style={{ color: "#bf1650" }}>Email Not Valid</p>
          )}

          <InputFields placeholder="Password" type="password" name="password" ref={register({ required: true })} />
          {_.get("password.type", errors) === "required" && (
            <p style={{ color: "#bf1650" }}>Password is required</p>
          )}

          <Button type="submit">Sign In</Button>
        </form>
      </LoginForm>
    </>
  );
}

export default LoginContent;
