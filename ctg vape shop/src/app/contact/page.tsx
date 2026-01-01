import { branches } from '@/lib/data'

export const metadata = {
    title: 'Contact Us | CTG Vape Shop',
}

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1>Contact Us</h1>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {branches.map((branch) => (
                    <div key={branch.id} style={{
                        background: 'var(--secondary)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)'
                    }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>{branch.name}</h3>
                        <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>{branch.address}</p>
                        <p style={{ color: 'var(--accent)' }}>{branch.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
