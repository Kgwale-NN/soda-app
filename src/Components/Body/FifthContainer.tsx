import React from 'react'
import styles from './Body.module.css'
import {Text} from '../Text/Text'
import { Button } from '../Inputs/Button'



export const FifthContainer = () => {

  return (


    <div className={styles['fifth-content-container']}>

       

    <div className={styles['save-content-container']}>


                  <Text variant='h1' style={{color:'rgb(8, 68, 8)'}} >|Save 15% with Endless Olipop.</Text>
                  <Text variant='p' style={{color:'rgb(8, 68, 8)'}}>Never run out of your favorite flavours when you join our</Text>
                  <Text variant='p' style={{color:'rgb(8, 68, 8)'}}>fam. Subcribe and save on every order - your wallet</Text>
                  <Text variant='p' style={{color:'rgb(8, 68, 8)'}}>(and digestion) will thank you.</Text>

    </div>


            <div className={styles['button-cont']}>

            <Button value='Subscribe & Save' type='Button' className={styles.button} style={{width:170 , marginTop:15 ,backgroundColor:'rgb(8, 68, 8)'}} />

            </div>

    </div>


  )


}
