import React from "react";
import Link from "next/link";

import { Box, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import styles from "../styles/ForgotPasswordForm.module.scss";

const ForgotPasswordForm = () => {
  return (
    <Box className={styles.container}>
      {/* Reset Password Header */}
      <h2>Forgot Your Password?</h2>
      <p>
        Please enter the email address for your account. A verification code
        will be sent to you. Once you have received the verification code you
        will be able to choose a new password for your account.
      </p>
      {/* Form */}
      {/* Form Item - email */}
      <TextField
        className={styles.formItem}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        InputProps={{
          startAdornment: <EmailIcon />,
        }}
      />
      <Button className={styles.resetPassword} variant="contained">
        Reset Password
      </Button>
      <Link href="/login">Back to Login page</Link>
    </Box>
  );
};
export default ForgotPasswordForm;
