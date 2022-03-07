import Head from "next/head";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Shopping APP</title>
        <meta name="description" content="My Shopping APP" />
      </Head>
      <Login />

      {/* <footer className={styles.footer}>All Rights Reserved</footer> */}
    </>
  );
}
