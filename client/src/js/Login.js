import React from "react";
import useForm from "react-hook-form";
import { toast } from "react-toastify";
import { login } from "./utils/auth";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    performLogin(data);
  };

  const performLogin = async (data) =>{
    try {
      const payload = {};
      payload["username"] = data.userName;
      payload["password"] = data.password;
      await login(payload);
      props.history.push("/");
    } catch (e) {
      console.log(e.code, e.message);
      toast(e.message, {
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  return (
    <main className="page-login">
      <section className="login-promo">
          <div className="login-promo__body">
            <h1 className="login__logo">
              <span className="sr-only">Vento</span>
            </h1>
            <p className="lead">
              <strong>Discover</strong>
              World's most amazing Asset Management System for your organization
            </p>
          </div>
      </section>
      <section className="login-form">
        <div className="login-form__body">
          <h2 className="login-form__title">Welcome</h2>
          <p className="login-form__desc">Please login to continue using Vento</p>
          <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor = "userName">Username</label>
              <input type="text" className="form-control" name = "userName" ref = {register({ required: true })} />
              <span className = "error">
                {errors.userName && "User name is required."}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor = "password">Password</label>
              <input
                className="form-control"
                name = "password"
                type = "password"
                ref = {register({ required: true })}
              />
              <span className = "error">
                {errors.password && "Password is required."}
              </span>
            </div>

            <button type = "submit" className="btn btn-primary btn-primary--lg btn-block mt-5">
              <div className="btn__value">Login</div>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
