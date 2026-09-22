import { useState, type FormEvent } from 'react'
import styles from './Subscribe.module.css'

export const Subscribe = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('Thanks! This demo does not send or store your email. No subscription was created.')
  }

  return (
    <form id="subscribe" className={styles['auth-container']} onSubmit={handleSubmit}>
      <label htmlFor="subscribe-email" className={styles['visually-hidden']}>Email address</label>
      <input
        id="subscribe-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Enter Your Email"
        required
        className={styles.input}
        onChange={() => setMessage('')}
      />
      <button type="submit" className={styles.button}>Subscribe</button>
      <p role="status" className={styles.note}>{message}</p>
    </form>
  )
}
