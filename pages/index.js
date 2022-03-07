import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Router, { useRouter } from "next/router";
import UserController from "../services/User";
import { Button } from "@mui/material";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    // login and generate access and refresh token.
    try {
      const res = await UserController.login({ username, password });
      const data = res.data;
      if (data) {
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping APP</title>
        <meta name="description" content="My Shopping APP" />
      </Head>

      <main className={styles.main}>
        <form>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="user"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button variant="contained">Login</Button>
          </div>
        </form>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
