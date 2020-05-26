import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid mediumaquamarine;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "davide.crestini@theculturetrip.com",
      password: "mariocaio",
    },
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <br />
      <label htmlFor="lastName">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
};
