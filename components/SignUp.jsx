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
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

import styles from "../styles/Register.module.scss";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    showPassword: false,
  });

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
          id="outlined-basic"
          label="Email"
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
        <Button className={styles.signUpButton} variant="contained">
          Create Account
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
