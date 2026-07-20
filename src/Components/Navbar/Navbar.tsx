import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {Text} from '../Text/Text'
import logo from  '../../assets/Logo.webp'
import { Button } from '../Inputs/Button'
import { ContentContainer } from '../ContentContainer'


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <nav>



  <ContentContainer className={styles.content}>

      <img src={logo} alt='Olipop logo' className={styles['logo-icon']}/>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? styles.open : ''}></span>
        <span className={isOpen ? styles.open : ''}></span>
        <span className={isOpen ? styles.open : ''}></span>
      </div>

        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>

       <a href='/#' className={styles.link}>Shop Online</a>
       <a href='/#' className={styles.link}>Find In Store</a>
       <a href='/#' className={styles.link}>Learn More</a>

   <div className={styles.sub}>

     <Button value='Subscribe' type='Button' className={styles.button}/>
     
   </div>

   </div>


  </ContentContainer>
        

    </nav>
  
  )
}
