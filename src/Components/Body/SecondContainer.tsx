import React from 'react'
import styles from './Body.module.css'
import {Text} from '../Text/Text'
import { Button } from '../Inputs/Button'
import { ContentContainer } from '../ContentContainer'


import olipop from  '../../assets/olipop-in-pack.jpg'


export const SecondContainer = () => {
  return (
    <div className={styles['information-container']}>

    <ContentContainer className={styles['information-container-content']}>


       <div className={styles.image}>

        <img src={olipop} alt='Olipop logo' className={styles['olipop-in-pack']}/>


       </div>

        <div className={styles['ingredients-info']}>

        
            <div className={styles.texts}>

             <Text variant='h1' style={{color:'rgb(1, 34, 1)'}}>|Our Foundation Ingredients</Text>
             <Text variant='p' >For over a decade, Ben and David have shared a vision of a healthier, tastier future. Their</Text>
             <Text variant='p' >quest for a product that could undermine the old guard of soda behemoths led them to</Text>
             <Text variant='p' >OLIPOP: a thoughtfully crafted tonic that found its taste in wholesome, hardworking</Text>
             <Text variant='p' >ingredients instead of spoonfuls of sugar.</Text>

            </div>

            <div className={styles['button-cont']}>

                           <Button value='Read More' type='Button' className={styles.button} />

            </div>

       </div>

    



    </ContentContainer>

    </div>
  )
}
