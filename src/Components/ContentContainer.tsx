import React from 'react'

type Props ={

    children:React.ReactNode,
    className?:string

}

export const ContentContainer:React.FC<Props> = ({children,className}) => {

  return (

    <div style={{maxWidth:1200, padding: 10}} className={className}>{children}</div>

  )
  
}
