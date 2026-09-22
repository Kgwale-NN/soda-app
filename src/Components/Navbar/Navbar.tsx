import { useRef, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/Logo.webp'
import { ContentContainer } from '../ContentContainer'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  return (
    <nav aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === 'Escape' && isOpen) { setIsOpen(false); toggle.current?.focus() }
    }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false) }}>
      <ContentContainer className={styles.content}>
        <a href="#main-content" aria-label="OLIPOP home" onClick={() => setIsOpen(false)}><img src={logo} alt="OLIPOP" className={styles['logo-icon']} /></a>
        <button ref={toggle} type="button" className={styles.hamburger} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="navigation-links" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? styles.open : ''} /><span className={isOpen ? styles.open : ''} /><span className={isOpen ? styles.open : ''} />
        </button>
        <div id="navigation-links" className={`${styles.links} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(false)}>
          <a href="#flavours" className={styles.link}>Shop Online</a>
          <a href="https://drinkolipop.com/pages/store-locator" className={styles.link}>Find In Store</a>
          <a href="#ingredients" className={styles.link}>Learn More</a>
          <a href="#subscribe" className={styles.button}>Subscribe</a>
        </div>
      </ContentContainer>
    </nav>
  )
}
