import styles from './Body.module.css'
import { Text } from '../Text/Text'

export type ProductCardProps = {
  name: string
  image: string
  price: string
  className: string
}

export const ProductCard = ({ name, image, price, className }: ProductCardProps) => (
  <div className={className}>
    <img src={image} alt={name} className={styles.product} />
    <Text variant="h3">{name}</Text>
    <p className={styles.price}>{price}</p>
  </div>
)
