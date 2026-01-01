import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/data'

export const metadata = {
    title: 'Devices | CTG Vape Shop',
}

export default function DevicesPage() {
    const devices = products.filter(p => p.category === 'Device')

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1>Vape Devices & Hardware</h1>
            <ProductGrid products={devices} />
        </div>
    )
}
