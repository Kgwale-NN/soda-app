import React from 'react'
import styles from './Inputs.module.css'

type TextInputProps = {

    id?:string,
    value?:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>
    style?:React.CSSProperties,
    error?:string,
    name?:string

}


export const TextInput:React.FC<TextInputProps> = ({id,value,onChange,style,error,name}) => {
  return (

    <div className={styles['input-container']}>

      <input name={name} type="text" id={id} style={style} value={value} onChange={onChange} className={styles.input} placeholder='Enter Your Email'/>
      { error && <span className={styles['input-error']}>{error}</span>}

    </div>

  )

}
