"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./register.module.css";

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 && router.push('/dashboard/login')

    } catch (error) {
      setError(true);
      console.log(error, "unsuccessful");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
      {error && "something went wrong"}
      <p className={styles.loginText}>
        Already have an Account?{" "}
        <Link href="/dashboard/login">
          <span className={styles.text}>Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
