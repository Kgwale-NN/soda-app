import styles from './Footer.module.css'
import { ContentContainer } from '../ContentContainer'
import logo from  '../../assets/Logo.webp'
import {Text} from '../Text/Text'
import { Subscribe } from '../Auth/Subscribe'



import Instagram from  '../../assets/instagram.png'
import Facebook from  '../../assets/facebook.png'
import X from  '../../assets/twitter.png'
import LinkedIn from  '../../assets/linkedin.png'
import Pintrest from  '../../assets/pinterest.png'
import { FifthContainer } from '../Body/FifthContainer'







export const Footer = () => {
  return (

    

    <footer>

    

    <FifthContainer  />


   
<ContentContainer className={styles['footer-content']}>

    <div className={styles['first-div']}>

    <div className={styles['brand-row']}>

    <img src={logo} alt='Olipop logo' className={styles['logo-icon']}/>

     <div className={styles['brand-text']}>

        <Text variant='h2' style={{color:'rgb(13, 53, 13)'}}>Stay Connected With</Text>
        <Text variant='h2' style={{color:'rgb(13, 53, 13)'}}>OLIPOP</Text>

     </div>

    </div>

  <Subscribe/>
    </div>


    <div className={styles['flavours-section']}>

        <Text variant='h2' style={{color:'rgb(13, 53, 13)'}}>FLAVOURS</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Watermelon Lime</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Vintage Cola</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Classic Root Beer</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Doctor Goodwin</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Banana Cream</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Strawberry Vanilla</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Ginger Lemon</Text>

    </div>
      <div className={styles['information-section']}>

        <Text variant='h2' style={{color:'rgb(13, 53, 13)'}}>INFORMATION</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>About Us</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Contact Us</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Terms</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>Privacy</Text>
        <Text variant='p' style={{color:'rgb(13, 53, 13)'}}>FAQ</Text>


    </div>


     <div className={styles.media}>
    <Text variant='h2' style={{color:'rgb(13, 53, 13)'}}>Social Media</Text>
    <div className={styles.links}>

     <a href='https://www.instagram.com/' className={styles.link}><img src={Instagram} alt='Instagram' className={styles['social-icon']}/></a>
     <a href='https://www.facebook.com/' className={styles.link}><img src={Facebook} alt='Facebook Icon' className={styles['social-icon']}/></a>
     <a href='https://www.twitter.com/' className={styles.link}><img src={X} alt='X Icon' className={styles['social-icon']}/></a>
     <a href='https://za.linkedin.com/' className={styles.link}><img src={LinkedIn} alt='LinkedIn Icon' className={styles['social-icon']}/></a>
     <a href='https://www.pinterest.com/' className={styles.link}><img src={Pintrest} alt='Pinterest' className={styles['social-icon']}/></a>


    </div>


    </div>


</ContentContainer>
            

   
    </footer>    

  )
}
