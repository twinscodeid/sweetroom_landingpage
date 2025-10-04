export default defineEventHandler((_e) => {
  return {
    data: [
      {
        id: 1,
        name: "Meja Lipat Dinding",
        imagesByColor: {
        "putih": "/image/product_meja_lipat_1.jpg",
        "hitam": "/image/product_meja_lipat_2.jpg",
        "motif kayu": "/image/image_product_3.png"
      },
        sizes: ["60x40x40 cm", "80x40x40 cm"],
        colors: ["putih", "hitam", "motif kayu"],
        variants: [
          {
            size: "60x40x40 cm",
            price: 149000,
            oldPrice: 249000,
          },
          {
            size: "80x40x40 cm",
            price: 179000,
            oldPrice: 279000,
          },
        ],

        description: "Dapatkan DISKON 100.000 sekarang juga",
        detail: `Meja Lipat Dinding ini merupakan sebuah karya kami dalam mendesign meja yang Minimalis dan futuristik
dapat dilipat dan sangat efisien tempat, ruangan yang sempit bukan suatu masalah untuk menempatkan meja lipat dinding ini
terbuat dari bahan yang sangat kokoh dan Tahan air 

Kenapa harus membeli produk ini?
1. Meja sangat efisien dapat dilipat dan dibuka dengan mudah 
2. tidak memakan tempat 
3. dapat digunakan sebagai Meja belajar, meja kantor, meja makan, meja setrika dll 
4. produk berkualitas sehingga awet dan kokoh 

Spesifikasi Material 
1. Material utama Blockboard 18 mm Kokoh dan Awet
2. Finishing Lapisan Tacosheet Tahan air dan Tahan lama 
3. Engsel dari besi, kuat dan mudah dilipat 

Cara Pemasangan mudah, tanpa harus memanggil tukang, disertai tutorial pemasangan 
pemasangan dapat menggunakan 2 cara : 
1. Pemasangan menggunakan skrup 
2. Pemasangan menggunakan Paku 

Packaging rapi dan dijamin aman sampai Tujuan, BERGARANSI!!!!
di dalam kardus sudah termasuk 
1. Skrup, Paku dan Fischer 
2. kertas panduan Pemasangan 

Kontak kami : 
Alamat 		: jl.Krapyak No.67A, Wedomartani, Ngemplak, Sleman 
No.HP/Whatsapp	: 081229280159 
Email 		: sweet.roomfurn@gmail.com
Instagram 	: @sweetroomfurn
Tiktok 		: Sweetroomfurni
Tokopedia 	: Sweetroomfurni 
        `,
      },
      //  {
      //   id: 2,
      //   name: "Sofa Hijau Elegan",
      //   imagesByColor: {
      //     "putih": "/image/image_product_1.png",
      //     "hitam": "/image/image_product_2.png",
      //     "motif kayu": "/image/image_product_3.png"
      //   },
      //   sizes: ["M", "L", "XL"],
      //   colors: ["putih", "hitam", "motif kayu"],
      //   description: "Sofa dengan desain elegan, nyaman digunakan untuk keluarga.",
      //   detail: "Detail lengkap untuk Sofa Hijau Elegan.",
      //   variants: [
      //     { size: "M", price: 3550000, oldPrice: 4100000 },
      //     { size: "L", price: 3850000, oldPrice: 4500000 },
      //     { size: "XL", price: 4150000, oldPrice: 4900000 },
      //   ],
      // },
      // {
      //   id: 3,
      //   name: "Sofa Cokelat Klasik",
      //   imagesByColor: {
      //     "putih": "/image/image_product_1.png",
      //     "hitam": "/image/image_product_2.png",
      //     "motif kayu": "/image/image_product_3.png"
      //   },
      //   sizes: ["S", "M", "L"],
      //   colors: ["putih", "hitam", "motif kayu"],
      //   description: "Sofa klasik berbahan kulit sintetis, mudah dibersihkan.",
      //   detail: "Detail lengkap untuk Sofa Cokelat Klasik.",
      //   variants: [
      //     { size: "S", price: 3150000, oldPrice: 3800000 },
      //     { size: "M", price: 3450000, oldPrice: 4100000 },
      //     { size: "L", price: 3750000, oldPrice: 4400000 },
      //   ],
      // },
      // {
      //   id: 4,
      //   name: "Kursi Putih Modern",
      //   imagesByColor: {
      //     "putih": "/image/image_product_1.png",
      //     "hitam": "/image/image_product_2.png",
      //     "motif kayu": "/image/image_product_3.png"
      //   },
      //   sizes: ["S", "M"],
      //   colors: ["putih", "hitam", "motif kayu"],
      //   description: "Kursi single modern dengan desain ergonomis untuk kenyamanan maksimal.",
      //   detail: "Detail lengkap untuk Kursi Putih Modern.",
      //   variants: [
      //     { size: "S", price: 1890000, oldPrice: 2250000 },
      //     { size: "M", price: 2190000, oldPrice: 2550000 },
      //   ],
      // },
      // {
      //   id: 5,
      //   name: "Sofa Beige Cozy",
      //   imagesByColor: {
      //     "putih": "/image/image_product_1.png",
      //     "hitam": "/image/image_product_2.png",
      //     "motif kayu": "/image/image_product_3.png"
      //   },
      //   sizes: ["M", "L", "XL"],
      //   colors: ["putih", "hitam", "motif kayu"],
      //   description: "Sofa cozy dengan nuansa beige hangat, cocok untuk ruang keluarga.",
      //   detail: "Detail lengkap untuk Sofa Beige Cozy.",
      //   variants: [
      //       { size: "M", price: 3490000, oldPrice: 3950000 },
      //       { size: "L", price: 3790000, oldPrice: 4250000 },
      //       { size: "XL", price: 4090000, oldPrice: 4550000 },
      //   ]
      // },
      // {
      //   id: 6,
      //   name: "Sofa Hijau Tosca",
      //   imagesByColor: {
      //     "putih": "/image/image_product_1.png",
      //     "hitam": "/image/image_product_2.png",
      //     "motif kayu": "/image/image_product_3.png"
      //   },
      //   sizes: ["S", "M", "L", "XL"],
      //   colors: ["putih", "hitam", "motif kayu"],
      //   description: "Sofa tosca stylish yang memberikan kesan segar pada ruangan Anda.",
      //   detail: "Detail lengkap untuk Sofa Hijau Tosca.",
      //   variants: [
      //       { size: "S", price: 3250000, oldPrice: 3800000 },
      //       { size: "M", price: 3550000, oldPrice: 4100000 },
      //       { size: "L", price: 3850000, oldPrice: 4400000 },
      //       { size: "XL", price: 4150000, oldPrice: 4700000 },
      //   ]
      // },
    ],
  };
});
