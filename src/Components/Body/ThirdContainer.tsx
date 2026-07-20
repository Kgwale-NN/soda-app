import { useState } from 'react'
import styles from './Body.module.css'
import {Text} from '../Text/Text'
import { Button } from '../Inputs/Button'


import Lemon from  '../../assets/ginger-lemon-removebg-preview.png'
import Grape from  '../../assets/classic-grape-removebg-preview.png'
import Orange from  '../../assets/orange-removebg-preview.png'
import Punch from  '../../assets/tropical-punch-removebg-preview.png'
import { ContentContainer } from '../ContentContainer'



export const ThirdContainer = () => {


  return (


   <div className={styles['third-container-content']}>


       <div className={styles['fav-text']}>

             <Text variant='h1'>Taste Your Favourite</Text>
             <Text variant='p'>Enjoy our take on classic flavours you know and love</Text>


       </div>

       <div className={styles['stock-item']}>



         <div className={styles['product1']}>

           <img src={Lemon} alt='Ginger Lemon' className={styles.product}/>
           <Text variant='h2'>Ginger Lemon</Text>
           <Button value='$ 34.99' type='Button' className={styles.button} style={{backgroundColor:'rgb(255, 236, 63)' , width:100}}/>




         </div>

                <div className={styles['product2']}>

           <img src={Grape} alt='Classic Grape' className={styles.product}/>
           <Text variant='h2'>Classic Grape</Text>
           <Button value='$ 34.99' type='Button' className={styles.button} style={{backgroundColor:'rgb(163, 3, 255)' , width:100}}/>




         </div>

                         <div className={styles['product3']}>

           <img src={Orange} alt='Orange Squeeze' className={styles.product}/>
           <Text variant='h2'>Orange Squeeze</Text>
           <Button value='$ 34.99' type='Button' className={styles.button} style={{backgroundColor:'rgb(255, 123, 0)', width:100}}/>




         </div>

                         <div className={styles['product4']}>

           <img src={Punch} alt='Tropical Punch' className={styles.product}/>
           <Text variant='h2'>Tropical Punch</Text>
           <Button value='$ 34.99' type='Button' className={styles.button} style={{backgroundColor:'rgb(255, 0, 0)', width:100}}/>




         </div>



       </div>

   </div>

  )
}
