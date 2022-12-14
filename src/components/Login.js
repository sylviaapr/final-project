import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import ramen from "../images/ramen.png";

const Login = () => {
  const onSubmit = (values, { resetForm }) => {
    axios({
      method: "post",
      url: "https://api-bootcamp.do.dibimbing.id/api/v1/login",
      data: {
        email: values.email,
        password: values.password,
      },
      headers: {
        apiKey: process.env.REACT_APP_APIKEY,
      },
    })
      .then((response) => {
        const token = response.data.token;
        const role = response.data.user.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        alert("Login Success!");
        resetForm({ values: "" });
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        alert(`${error.response.data.message}`);
      });
  };

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="mb-3">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return (
    <section>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={onSubmit}
      >
        <div className="container-md">
          <div className="text-center">
            <img
              src={ramen}
              alt="ramen"
              style={{ maxWidth: `20%` }}
              className="img-fluid align-items-center"
            />
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 border rounded p-4 shadow">
              <div className="text-center">
                <h2 className="color1">Log In</h2>
                <p>
                  Don't have an account?
                  <Link className="text-decoration-none m-1 color2" to="/">
                    Register
                  </Link>
                </p>
              </div>
              <Form>
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="janedoe@yahoo.com"
                />

                <MyTextInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bgcolor1 text-light btn-warning shadow"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </section>
  );
};

export default Login;
