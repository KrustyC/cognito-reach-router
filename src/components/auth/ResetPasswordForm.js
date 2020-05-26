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

export const ResetPasswordForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "Mario Caio",
      password: "mariocaio",
      repeatPassword: "mariocaio",
    },
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      <br />
      <label htmlFor="lastName">Repeat Password</label>
      <input
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
};
