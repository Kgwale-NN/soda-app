import styles from './Body.module.css'
import {Text} from '../Text/Text'
import { ContentContainer } from '../ContentContainer'


import olipop from  '../../assets/olipop-in-pack.jpg'


export const SecondContainer = () => {
  return (
    <section id="ingredients" className={styles['information-container']}>

    <ContentContainer className={styles['information-container-content']}>


       <div className={styles.image}>

        <img src={olipop} alt='Olipop logo' className={styles['olipop-in-pack']}/>


       </div>

        <div className={styles['ingredients-info']}>

        
            <div className={styles.texts}>

             <Text variant='h2' style={{color:'rgb(1, 34, 1)'}}>Our Foundation Ingredients</Text>
             <Text variant="p">For over a decade, Ben and David have shared a vision of a healthier, tastier future. Their quest for a product that could undermine the old guard of soda behemoths led them to OLIPOP: a thoughtfully crafted tonic that found its taste in wholesome, hardworking ingredients instead of spoonfuls of sugar.</Text>

            </div>

            <div className={styles['button-cont']}>

                           <a href="#benefits" className={styles.button}>Explore the Benefits</a>

            </div>

       </div>

    



    </ContentContainer>

    </section>
  )
}
