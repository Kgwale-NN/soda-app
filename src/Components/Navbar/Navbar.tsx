import React from 'react'
import styles from './Navbar.module.css'
import {Text} from '../Text/Text'
import logo from  '../../assets/Logo.webp'
import { Button } from '../Inputs/Button'
import { ContentContainer } from '../ContentContainer'


export const Navbar = () => {
  return (

    <nav>



  <ContentContainer className={styles.content}>

      <img src={logo} alt='Olipop logo' className={styles['logo-icon']}/>

        <div className={styles.links}>

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
