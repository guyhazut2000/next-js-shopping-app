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

const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
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
      {/* Login Header */}
      <h2>Login</h2>
      {/* Form */}
      <form className={styles.form}>
        {/* Form Item - username */}
        <TextField
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
        {/* Link - forgot password */}
        <Link href="/forgot-password">Forgot password?</Link>
        {/* Button - login */}
        <Button className={styles.submitButton} variant="contained">
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
