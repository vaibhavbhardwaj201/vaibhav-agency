"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './login.module.css'

import { signIn, useSession } from 'next-auth/react'

const Login = () => {

  const router = useRouter()
  const session = useSession()

  if (session.status === "loading") {
    return <p>Loading...</p>
  }
  if (session.status === "authenticated") {
    router?.push('/dashboard')
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn("credentials", {email, password})

  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button className={styles.button}>Login</button>
        <hr />
        <button onClick={() => signIn("google")}>Login with Google</button>
      </form>
      <p className={styles.loginText}>
        Don&apos;t have an Account?{" "}
        <Link href="/dashboard/register">
          <span className={styles.text}>Register</span>
        </Link>
      </p>
    </div>
  )
}

export default Login