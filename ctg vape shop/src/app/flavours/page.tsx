import ProductGrid from '@/components/ProductGrid'
import { products } from '@/lib/data'

export const metadata = {
    title: 'Flavours | CTG Vape Shop',
}

export default function FlavoursPage() {
    const flavours = products.filter(p => p.category === 'Flavour')

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1>Premium E-Liquids</h1>
            <ProductGrid products={flavours} />
        </div>
    )
}
