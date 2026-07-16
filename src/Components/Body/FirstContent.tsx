import React from 'react'
import styles from './Body.module.css'
import {Text} from '../Text/Text'
import { Button } from '../Inputs/Button'
import { ContentContainer } from '../ContentContainer'
import { Subscribe } from '../Auth/Subscribe'



import drink1 from  '../../assets/strawberry-vanilla.webp'


export const FirstContent = () => {
  return (

    <div className={styles['first-container']}>

    <ContentContainer className={styles['content-first-container']}>


       <div className={styles['first-cont']}>

      <Text variant='h1' style={{fontSize:80 ,color:'rgb(13, 53, 13)', fontFamily:'sans-serif'}}>A New Kind</Text>
      <Text variant='h1' style={{fontSize:80 ,color:'rgb(13, 53, 13)', fontFamily:'sans-serif'}}>of Soda</Text>
      <Button value='Shop OLIPOP' type='Button' className={styles.button} />
      

       </div>

           <div className={styles['second-cont']}>

               <img src={drink1} alt='Strawberry Vanilla Olipop' className={styles['strewberry-vanilla-olipop']}/>
       </div>

    </ContentContainer>

    </div>
  )
}
