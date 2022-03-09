import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

import styles from "../styles/LoginForm.module.scss";
import Link from "next/link";
import UserController from "../services/UserController";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

/**
 *
 * TODO:
 * add input validation, input errors.
 * fix css style
 * add user authentication and tokens
 * add redux
 * add google, facebook, github sign up
 */
const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const router = useRouter();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await UserController.login({
        email: values.email,
        password: values.password,
      });
      if (
        user.data === null &&
        user.data.loginStatus === "failed" &&
        user.status === 200
      ) {
        Swal.fire("Login Error", user.errorMessage, "error");
        return;
      }
      // if user exists move to home page.
      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged in successfully.\nMoving to Home Page.",
          showConfirmButton: false,
          timer: 2000,
        });
        // window.location.reload();
        setTimeout(function () {
          router.push("/home");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={styles.container}>
      {/* Login Header */}
      <h2>Login</h2>
      {/* Form */}
      <form className={styles.form}>
        {/* Form Item - username */}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleChange("email")}
          InputProps={{
            startAdornment: <PersonIcon />,
          }}
        />
        {/* Form Item - password */}
        <FormControl variant="outlined" className={styles.formControl}>
          <div className={styles.formItem}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              startAdornment={<LockIcon />}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </div>
        </FormControl>
        {/* Link - forgot password */}
        <Link href="/forgot-password">Forgot password?</Link>
        {/* Button - login */}
        <Button
          className={styles.submitButton}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <h3>Or Sign Up using</h3>
        <div className={styles.socialSignUp}>
          {/* Social Icons - sign up  */}
          {/* Social icon - facebook */}
          <h3>facebook</h3>
          {/* Social icon - Github */}
          <h3>Github</h3>
          {/* Social icon - Google */}
          <h3>Google</h3>
        </div>
        <h3>Or Sign Up using</h3>
        {/* Link - normal sign up  */}
        <Link href="/register"> Sign Up</Link>
      </form>
    </Box>
  );
};

export default LoginForm;
