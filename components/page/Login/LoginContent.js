/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2021-02-01 18:08:28
 * @modify date 2021-02-01 21:38:05
 * @desc [description]
 */
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import _ from "lodash/fp";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
  Button, ButtonLogin, H1, InputFields, LoginForm,
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

  const responseGoogle = (response) => {
    dispatch(LoginAction({
      email: response.profileObj.email,
      password: response.profileObj.email,
    }));
  };

  const handleClickFacebook = (response) => {
    dispatch(LoginAction({
      email: response.profileObj.email,
      password: response.profileObj.email,
    }));
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
        <br />
        <br />
        <ButtonLogin>
          <GoogleLogin
            clientId="931340461634-i2jnqpig6h233rgmm7ftnh825uddjd18.apps.googleusercontent.com"
            buttonText="Login With Google"
            onClick={responseGoogle}
            cookiePolicy="single_host_origin"
          />

          <FacebookLogin
            appId="1088597931155576"
            autoLoad
            fields="name,email,picture"
            onClick={handleClickFacebook}
          />
        </ButtonLogin>
      </LoginForm>
    </>
  );
}

export default LoginContent;
