import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/data'

export default function Home() {
  // Get first 3 products for featured section
  const featuredProducts = products.slice(0, 3)

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Premium Vape Experience</h1>
            <p className={styles.heroSubtitle}>Discover the finest flavours and advanced devices in Chittagong.</p>
            <a href="/flavours" className="btn btn-primary">Shop Now</a>
          </div>
          <div className={styles.heroVisual}>
            {/* Visual placeholder or dynamic element */}
            <Image
              src="/images/hero-premium.png"
              alt="Premium Vape Device"
              width={600}
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  )
}
