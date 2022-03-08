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
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

import styles from "../styles/SignUpForm.module.scss";
import UserController from "../services/UserController";

const SignUpForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    showPassword: false,
  });

  //router
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

  const register = async (e) => {
    e.preventDefault();
    try {
      // register new user
      const data = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      const newUser = await UserController.register(data);
      // if user register with success, direct user to login page.
      if (newUser.data !== null && newUser.data.registerStatus === "success") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.\nMoving to Login Page.",
          showConfirmButton: false,
          timer: 2000,
        });
        // window.location.reload();
        setTimeout(function () {
          router.push("login");
        }, 2000);
      }
      // if email exists display error msg.
      if (
        newUser.data !== null &&
        newUser.data.registerStatus === "failed" &&
        newUser.status === 202
      ) {
        Swal.fire("Register Error", "Email is already been used.", "error");
        return;
      }
    } catch (error) {
      console.log(error);
      throw new Error("register error. unable to register new user.");
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box className={styles.container}>
      {/* Register Header */}
      <h2>Register</h2>
      {/* Form */}
      <form className={styles.form}>
        {/* Form Item - username */}
        <TextField
          className={styles.formItem}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={handleChange("username")}
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
        <TextField
          className={styles.formItem}
          id="outlined-basic-email"
          label="Email"
          onChange={handleChange("email")}
          variant="outlined"
          InputProps={{
            startAdornment: <EmailIcon />,
          }}
        />
        {/* Link - forgot password */}
        <div className={styles.login}>
          <h3>Already have an account?</h3>
          <Link href="/login">Sign In</Link>
        </div>
        {/* Button - login */}
        <Button
          className={styles.signUpButton}
          variant="contained"
          onClick={register}
        >
          Create Account
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;
