import styles from './Body.module.css'
import {Text} from '../Text/Text'



export const FifthContainer = () => {

  return (


    <div className={styles['fifth-content-container']}>

       

    <div className={styles['save-content-container']}>


                  <Text variant='h2' style={{color:'rgb(8, 68, 8)'}} >Save 15% with Endless Olipop.</Text>
                  <Text variant="p">Never run out of your favorite flavours when you join our fam. Subscribe and save on every order - your wallet (and digestion) will thank you.</Text>

    </div>


            <div className={styles['button-cont']}>

            <a href="#subscribe" className={styles.button}>Subscribe &amp; Save</a>

            </div>

    </div>


  )


}
