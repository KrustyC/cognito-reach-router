import React from "react";
import { Router, Redirect } from "@reach/router";
import { Login } from "./Login";
import { ResetPassword } from "./ResetPassword";

export const AuthPages = () => (
  <Router>
    <Redirect from="/" to="/auth/login" noThrow />

    <Login path="/login" />
    <ResetPassword path="/reset-password" />
  </Router>
);
