import styles from './Subscribe.module.css'
import inputs from '../Inputs/Inputs.module.css'
export const Subscribe = () => (
  <div id="subscribe" className={styles['auth-container']}>
    <label htmlFor="subscribe-email">Email address</label>
    <input id="subscribe-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputs.input} aria-describedby="subscribe-note" />
    <button type="button" disabled className={styles.button}>Subscriptions coming soon</button>
    <p id="subscribe-note" className={styles.note}>This is a preview. Email addresses are not collected.</p>
  </div>
)
