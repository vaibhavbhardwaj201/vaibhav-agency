import React from "react";

import styles from "./register.module.css";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
      </form>
      <p className={styles.loginText}>Already have an Account? <Link href='/dashboard/login'><span className={styles.text}>Login</span></Link></p>
    </div>
  );
};

export default Register;
