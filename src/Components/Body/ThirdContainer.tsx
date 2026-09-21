import styles from './Body.module.css'
import {Text} from '../Text/Text'


import Lemon from  '../../assets/ginger-lemon-removebg-preview.png'
import Grape from  '../../assets/classic-grape-removebg-preview.png'
import Orange from  '../../assets/orange-removebg-preview.png'
import Punch from  '../../assets/tropical-punch-removebg-preview.png'



export const ThirdContainer = () => {


  return (


   <section id="flavours" className={styles['third-container-content']}>


       <div className={styles['fav-text']}>

             <Text variant='h2'>Taste Your Favourite</Text>
             <Text variant='p'>Enjoy our take on classic flavours you know and love</Text>


       </div>

       <div className={styles['stock-item']}>



         <div className={styles['product1']}>

           <img src={Lemon} alt='Ginger Lemon' className={styles.product}/>
           <Text variant='h3'>Ginger Lemon</Text>
           <p className={styles.price}>$34.99</p>




         </div>

                <div className={styles['product2']}>

           <img src={Grape} alt='Classic Grape' className={styles.product}/>
           <Text variant='h3'>Classic Grape</Text>
           <p className={styles.price}>$34.99</p>




         </div>

                         <div className={styles['product3']}>

           <img src={Orange} alt='Orange Squeeze' className={styles.product}/>
           <Text variant='h3'>Orange Squeeze</Text>
           <p className={styles.price}>$34.99</p>




         </div>

                         <div className={styles['product4']}>

           <img src={Punch} alt='Tropical Punch' className={styles.product}/>
           <Text variant='h3'>Tropical Punch</Text>
           <p className={styles.price}>$34.99</p>




         </div>



       </div>

   </section>

  )
}
