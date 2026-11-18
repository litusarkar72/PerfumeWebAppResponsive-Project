const perfumes = [
    {
        id: 1,
        name: "Royal Woods",
        price: 1599,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
        description: "Take a walk in the wonders creating a perfect ensemble to every moment spent among exquisite things with Wonder Of You."
    },
    {
        id: 2,
        name: "Midnight Bloom",
        price: 1899,
        image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 3,
        name: "Golden Aura",
        price: 2199,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 4,
        name: "Ocean Drift",
        price: 1299,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 5,
        name: "Pink Essence",
        price: 1499,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 6,
        name: "Amber Light",
        price: 1799,
        image: "https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 7,
        name: "Dark Musk",
        price: 1350,
        image: "https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 8,
        name: "Silver Mist",
        price: 2100,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 1,
        name: "Royal Woods",
        price: 1599,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 2,
        name: "Midnight Bloom",
        price: 1899,
        image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 3,
        name: "Golden Aura",
        price: 2199,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 4,
        name: "Ocean Drift",
        price: 1299,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 5,
        name: "Pink Essence",
        price: 1499,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 6,
        name: "Amber Light",
        price: 1799,
        image: "https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 7,
        name: "Dark Musk",
        price: 1350,
        image: "https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
    {
        id: 8,
        name: "Silver Mist",
        price: 2100,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rawdha by Ahmed is a fragrance that reminds you of the sacred memories from Haramain in Saudi Arabia."
    },
];

export default perfumes;
