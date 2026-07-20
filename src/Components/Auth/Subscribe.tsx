import React from 'react'
import { TextInput } from '../Inputs/TextInput'
import { Button } from '../Inputs/Button'
import { Text } from '../Text/Text'
import styles from './Subscribe.module.css'

export const Subscribe = () => {
  return (

    <div className={styles['auth-container']}>


      <TextInput onChange={() => {}} />
      <Button value='SUBSCRIBE' type='button' className={styles.button}/>
        


    </div>
  )
}
