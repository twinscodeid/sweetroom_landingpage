<script lang="ts" setup>
import { ref } from "vue";
import ProductDetailModal from "~/components/DetailProductComponent.vue"; // Pastikan path ini benar

// 1. Tangkap props dengan benar
const props = defineProps<{
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    price_discount: number | null;
    colors: string[];
    sizes?: string[];
    description?: string;
  };
}>();

interface ProductDetail {
  name: string;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  price: number;
  oldPrice?: number;
}

const isModalOpen = ref(false);
const selectedProduct = ref<ProductDetail | null>(null);

const openProductDetail = () => {
  const fullProductData: ProductDetail = {
    name: props.product.name,
    images: [
      props.product.image,
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg",
      "https://images.pexels.com/photos/5998136/pexels-photo-5998136.jpeg",
    ],
    sizes: props.product.sizes || ["160 x 100 cm", "120 x 100 cm"],
    colors: props.product.colors,
    description:
      props.product.description ||
      "Ini adalah deskripsi produk yang menarik. Dibuat dengan bahan berkualitas tinggi untuk kenyamanan maksimal.",
    price: props.product.price_discount || props.product.price,
    oldPrice: props.product.price_discount ? props.product.price : undefined,
  };

  selectedProduct.value = fullProductData;
  isModalOpen.value = true;
};

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID").format(value);
</script>

<template>
  <div>
    <div
      data-aos="zoom-in"
      class="shadow-sm hover:shadow-md bg-[#F2F2F2] rounded-b-lg transition flex flex-col"
    >
      <div class="overflow-hidden">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-[243px] object-cover hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      <div class="p-4 flex flex-col flex-grow">
        <div class="flex-grow">
          <h3
            class="text-sm sm:text-base font-medium text-gray-800 mb-2 min-h-[40px]"
          >
            {{ product.name }}
          </h3>
          <div class="flex items-center justify-between">
            <div
              v-if="product.price_discount"
              class="text-xs sm:text-sm text-red-500 line-through"
            >
              Rp {{ formatRupiah(product.price) }}
            </div>
            <div v-else></div>
            <div class="flex gap-2">
              <span
                v-for="(color, index) in product.colors"
                :key="index"
                :style="{ backgroundColor: color }"
                class="w-5 h-5 rounded-full border border-gray-300"
              />
            </div>
          </div>
          <div class="text-base sm:text-lg mt-1 font-semibold text-gray-900">
            Rp {{ formatRupiah(product.price_discount || product.price) }}
          </div>
        </div>

        <button
          @click="openProductDetail"
          class="mt-4 w-full cursor-pointer border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-black hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Detail
        </button>
      </div>
    </div>

    <ProductDetailModal
      v-model:modelValue="isModalOpen"
      :product="selectedProduct"
    />
  </div>
</template>