// This file contains all the data for the website.
// You can directly edit this file to add, remove, or update products and branches.

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: 'Flavour' | 'Device';
    image: string;
};

export type Branch = {
    id: string;
    name: string;
    address: string;
    contact: string;
};

// --- PRODUCTS DATA ---
export const products: Product[] = [
    {
        id: '1',
        name: 'Cool Mint',
        description: 'Refreshing mint flavour that provides a cool sensation.',
        price: 500,
        stock: 50,
        category: 'Flavour',
        image: '/images/cool-mint.png'
    },
    {
        id: '2',
        name: 'Caliburn G3 Lite',
        description: 'Advanced device for professionals with adjustable airflow.',
        price: 1500,
        stock: 10,
        category: 'Device',
        image: '/images/image.png'
    },
    {
        id: '3',
        name: 'Mango Ice',
        description: 'Sweet tropical mango with a hint of cooling ice.',
        price: 600,
        stock: 25,
        category: 'Flavour',
        image: '/images/mango-ice.png' // Ensure this is also correct
    },
    // --- NEW PRODUCTS ---
    {
        id: '4',
        name: 'Blueberry Ice',
        description: 'Rich blueberry flavour with a frosty finish.',
        price: 550,
        stock: 40,
        category: 'Flavour',
        image: '/images/blueberry-ice.png'
    },
    {
        id: '5',
        name: 'Strawberry Kiwi',
        description: 'Perfect blend of sweet strawberry and tangy kiwi.',
        price: 550,
        stock: 35,
        category: 'Flavour',
        image: '/images/cool-mint.png' // Placeholder: Replace with /images/strawberry-kiwi.png
    },
    {
        id: '6',
        name: 'Watermelon Chill',
        description: 'Juicy watermelon with a refreshing ice kick.',
        price: 550,
        stock: 30,
        category: 'Flavour',
        image: '/images/cool-mint.png' // Placeholder: Replace with /images/watermelon-chill.png
    },
    {
        id: '7',
        name: 'Grape Frost',
        description: 'Bold grape soda flavour with icy cold menthol.',
        price: 550,
        stock: 45,
        category: 'Flavour',
        image: '/images/cool-mint.png' // Placeholder: Replace with /images/grape-frost.png
    },
    {
        id: '8',
        name: 'Caliburn G4',
        description: 'Compact and portable pod system for on-the-go vaping.',
        price: 2500,
        stock: 15,
        category: 'Device',
        image: '/images/image copy.png' // Placeholder: Replace with /images/sleek-pod.png
    },
    {
        id: '9',
        name: 'Jellybox Robot Edition',
        description: 'Rugged high-power mod for cloud chasers.',
        price: 4500,
        stock: 8,
        category: 'Device',
        image: '/images/image copy 2.png' // Placeholder: Replace with /images/tactical-mod.png
    }
];

// --- BRANCHES DATA ---
export const branches: Branch[] = [
    { id: '1', name: 'Main Branch', address: 'kazir dewri, Chittagong', contact: '+880 123 456 789' },
    { id: '2', name: '2nd Branch', address: 'Yunesco City Mall, Chittagong', contact: '+880 987 654 321' },
    { id: '3', name: '3rd Branch', address: 'Boropol,Halishahar, Chittagong', contact: '+880 111 222 333' }
];
