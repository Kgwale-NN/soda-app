import styles from './Body.module.css'
import { Text } from '../Text/Text'
import { ProductCard, type ProductCardProps } from './ProductCard'
import Lemon from '../../assets/ginger-lemon-removebg-preview.png'
import Grape from '../../assets/classic-grape-removebg-preview.png'
import Orange from '../../assets/orange-removebg-preview.png'
import Punch from '../../assets/tropical-punch-removebg-preview.png'

type Product = ProductCardProps & { id: string }

const products: Product[] = [
  { id: 'ginger-lemon', name: 'Ginger Lemon', image: Lemon, price: '$34.99', className: styles.product1 },
  { id: 'classic-grape', name: 'Classic Grape', image: Grape, price: '$34.99', className: styles.product2 },
  { id: 'orange-squeeze', name: 'Orange Squeeze', image: Orange, price: '$34.99', className: styles.product3 },
  { id: 'tropical-punch', name: 'Tropical Punch', image: Punch, price: '$34.99', className: styles.product4 },
]

export const ThirdContainer = () => (
  <section id="flavours" className={styles['third-container-content']}>
    <div className={styles['fav-text']}>
      <Text variant="h2">Taste Your Favourite</Text>
      <Text variant="p">Enjoy our take on classic flavours you know and love</Text>
    </div>
    <div className={styles['stock-item']}>
      {products.map(({ id, ...product }) => (
        <ProductCard key={id} {...product} />
      ))}
    </div>
  </section>
)
