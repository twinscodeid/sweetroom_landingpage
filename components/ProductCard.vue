<script lang="ts" setup>
interface Variant {
  size: string;
  price: number;
  oldPrice?: number;
}

const props = defineProps<{
  product: {
    id: number;
    name: string;
    images: string[];
    variants: Variant[];
    colors: string[];
    sizes?: string[];
    description: string;
    detail?: string;
  };
}>();

interface ProductDetail {
  name: string;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  detail?: string;
  variants: Variant[];
}

const isModalOpen = ref(false);
const selectedProduct = ref<ProductDetail | null>(null);
const selectedColor = ref(props.product.colors[0]);

const openProductDetail = () => {
  const fullProductData: ProductDetail = {
    name: props.product.name,
    images: [
      ...props.product.images,
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg",
      "https://images.pexels.com/photos/5998136/pexels-photo-5998136.jpeg",
    ],
    sizes: props.product.sizes || ["160 x 100 cm", "120 x 100 cm"],
    colors: props.product.colors,
    description: props.product.description,
    variants: props.product.variants,
    detail: props.product.detail || "",
  };

  selectedProduct.value = fullProductData;
  isModalOpen.value = true;
};

const displayPrice = computed(() => {
  if (props.product.variants && props.product.variants.length > 0) {
    return props.product.variants[0].price;
  }
  return 0; // Nilai default jika tidak ada varian
});

const displayOldPrice = computed(() => {
  if (props.product.variants && props.product.variants.length > 0) {
    return props.product.variants[0].oldPrice;
  }
  return undefined; // Nilai default jika tidak ada varian
});
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
          :src="product.images[0]"
          :alt="product.name"
          class="w-full aspect-square object-fill hover:scale-110 bg-gray-100 transition duration-300 ease-in-out"
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
              v-if="displayOldPrice"
              class="text-xs sm:text-sm text-red-500 line-through"
            >
              Rp {{ formatRupiah(displayOldPrice) }}
            </div>
            <div v-else></div>
            <div class="flex flex-wrap items-center gap-1">
              <button
                v-for="color in product.colors"
                :key="color"
                @click="selectedColor = color"
                type="button"
                class="px-2 py-1 text-sm border rounded-md transition duration-200 ease-in-out"
                :class="[
                  selectedColor === color
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
                ]"
              >
                {{ color }}
              </button>
            </div>
          </div>
          <div class="text-base sm:text-lg mt-1 font-semibold text-gray-900">
            Rp {{ formatRupiah(displayPrice) }}
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

    <DetailProductComponent
      v-model:modelValue="isModalOpen"
      :product="selectedProduct"
    />
  </div>
</template>