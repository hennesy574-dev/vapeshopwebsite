import Link from 'next/link'
import styles from './ProductGrid.module.css'
import { Product } from '@/lib/data'

interface ProductGridProps {
    products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return <p style={{ color: '#888' }}>No products found in this category.</p>
    }

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.card}>
                    <div className={styles.image}>
                        {product.image ? (
                            <img src={product.image} alt={product.name} className={styles.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div className={styles.placeholder}>{product.name.charAt(0)}</div>
                        )}
                    </div>

                    <div className={styles.content}>
                        <h3 className={styles.name}>{product.name}</h3>
                        <p className={styles.description} style={{ fontSize: '0.9rem', color: '#aaa', margin: '0.5rem 0' }}>{product.description}</p>
                        <div className={styles.footer} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                            <span className={styles.price} style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent)' }}>৳ {product.price}</span>
                            <span className={styles.stock} style={{ fontSize: '0.8rem', color: product.stock > 0 ? 'var(--highlight)' : 'var(--danger)' }}>
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
