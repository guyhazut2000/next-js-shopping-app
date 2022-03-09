import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Router, { useRouter } from "next/router";
import UserController from "../services/User";
import { Button } from "@mui/material";

export default function Home() {
  return <h1>home</h1>;
}
