import styles from './Body.module.css'
import {Text} from '../Text/Text'
import { ContentContainer } from '../ContentContainer'



import drink1 from  '../../assets/strawberry-vanilla.webp'


export const FirstContent = () => {
  return (

    <div className={styles['first-container']}>

    <ContentContainer className={styles['content-first-container']}>


       <div className={styles['first-cont']}>

      <Text variant='h1' style={{color:'rgb(13, 53, 13)'}}>A New Kind<br />of Soda</Text>
      <a href="#flavours" className={styles.button}>Shop OLIPOP</a>
      

       </div>

           <div className={styles['second-cont']}>

               <img src={drink1} alt='Strawberry Vanilla Olipop' className={styles['strewberry-vanilla-olipop']}/>
       </div>

    </ContentContainer>

    </div>
  )
}
