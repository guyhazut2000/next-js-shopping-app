import Head from "next/head";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Shopping APP</title>
        <meta name="description" content="My Shopping APP" />
      </Head>
      <LoginForm />

      {/* <footer className={styles.footer}>All Rights Reserved</footer> */}
    </>
  );
}
