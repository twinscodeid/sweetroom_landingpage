export default defineEventHandler((_e) => {
    return {
        data: [
            {
                id: 1,
                name: "Sofa Minimalis Abu-Abu",
                price: 3500000,
                image: '/image/image_product_1.png',
                colors: ["#A9A9A9", "#000000", "#FFFFFF"],
                description: "Sofa minimalis modern dengan balutan kain premium, cocok untuk ruang tamu.",
                stock: true,
                price_discount: 2999000 // Harga setelah diskon
            },
            {
                id: 2,
                name: "Sofa Hijau Elegan",
                price: 4200000,
                image: "/image/image_product_2.png",
                colors: ["#006400", "#FFFFFF"],
                description: "Sofa dengan desain elegan, nyaman digunakan untuk keluarga.",
                stock: true,
                price_discount: 3850000 // Harga setelah diskon
            },
            {
                id: 3,
                name: "Sofa Cokelat Klasik",
                price: 3900000,
                image: "/image/image_product_3.png",
                colors: ["#8B4513", "#D2B48C"],
                description: "Sofa klasik berbahan kulit sintetis, mudah dibersihkan.",
                stock: true,
                price_discount: 3100000 // Tidak ada diskon
            },
            {
                id: 4,
                name: "Kursi Putih Modern",
                price: 2100000,
                image: "/image/image_product_1.png",
                colors: ["#FFFFFF", "#000000"],
                description: "Kursi single modern dengan desain ergonomis untuk kenyamanan maksimal.",
                stock: true, // Stok habis
                price_discount: 2000000 // Tidak ada diskon karena stok habis
            },
            {
                id: 5,
                name: "Sofa Beige Cozy",
                price: 3700000,
                image: "/image/image_product_2.png",
                colors: ["#F5F5DC", "#A0522D"],
                description: "Sofa cozy dengan nuansa beige hangat, cocok untuk ruang keluarga.",
                stock: true,
                price_discount: 3499000 // Harga setelah diskon
            },
            {
                id: 6,
                name: "Sofa Hijau Tosca",
                price: 4000000,
                image: "/image/image_product_3.png",
                colors: ["#20B2AA", "#2F4F4F"],
                description: "Sofa tosca stylish yang memberikan kesan segar pada ruangan Anda.",
                stock: true,
                price_discount: 3499000 // Tidak ada diskon
            },
        ]
    }
})