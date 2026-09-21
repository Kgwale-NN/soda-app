import styles from './Body.module.css'
import { Text } from '../Text/Text'

import Dollar from  '../../assets/coin.png'
import PlasticCup from  '../../assets/plastic-cup.png'
import Truck from  '../../assets/truck.png'
import X from  '../../assets/cross.png'
import LemonOlipopGinger from  '../../assets/olipop-ginger-lemon.jpg'




export const FourthContainer = () => {
  return (

    <section id="benefits" aria-label="Subscription benefits" className={styles['fourth-content-container']}>

        <div className={styles['bullets-container']}>

          <div className={styles['left-bullets']}>
                   
                  <div className={styles['bullets-point']}>
                   
                    <div className={styles.icon}><img src={Dollar} alt='Dollar Sign' className={styles['dollar-sign']}/></div>
                    <Text variant='p'>Save 15% on every order</Text>
                  
                   </div>

                                      
                  <div className={styles['bullets-point']}>
                   
                    <div className={styles.icon}><img src={PlasticCup} alt='Plastic Cup' className={styles['plastic-cup']}/></div>
                    <Text variant='p'>Early access to new flavors</Text>
                  
                   </div>

          </div>

          <div className={styles['center-image-bullets']}>


             <img src={LemonOlipopGinger} alt='Lemon Olipop Ginger' className={styles['center-product-image']}/>


          </div>

          <div className={styles['right-bullets']}>

                  <div className={styles['bullets-point']}>
                   
                    <div className={styles.icon}><img src={Truck} alt='Truck Icon' className={styles.truck}/></div>
                    <Text variant='p'>Free Shipping, Always</Text>
                  
                   </div>

                                      
                  <div className={styles['bullets-point']}>
                   
                    <div className={styles.icon}><img src={X} alt='Cross' className={styles.cross}/></div>
                    <Text variant='p'>Swap, skip or cancel any time</Text>
                  
                   </div>

          </div>

        </div>


    </section>
  )
}
