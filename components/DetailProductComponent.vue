<script lang="ts" setup>
interface Variant {
  size: string;
  price: number;
  oldPrice?: number;
}
interface Product {
  name: string;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  detail?: string;
  variants: Variant[];
}

const props = defineProps<{
  product: Product | null;
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

// State reaktif untuk interaksi di dalam modal
const currentImageIndex = ref(0);
const selectedVariant = ref<Variant | null>(null);
const selectedColor = ref<string | null>(props.product?.colors[0] || null);
const activeTab = ref("deskripsi");

// Computed property untuk mendapatkan gambar saat ini
const currentImage = computed(() => {
  return props.product?.images[currentImageIndex.value] || "";
});

// Fungsi untuk menutup modal
const closeModal = () => {
  emit("update:modelValue", false);
};

// Fungsi navigasi galeri gambar
const nextImage = () => {
  if (props.product) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % props.product.images.length;
  }
};

const prevImage = () => {
  if (props.product) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + props.product.images.length) %
      props.product.images.length;
  }
};

// Fungsi untuk menangani penekanan tombol Escape
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

// Reset state saat produk berubah atau modal dibuka
watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) {
      currentImageIndex.value = 0;
      selectedVariant.value = newProduct.variants?.[0] || null;
      selectedColor.value = newProduct.colors?.[0] || null;
    }
  },
  { immediate: true }
);

// Tambahkan dan hapus event listener untuk tombol Escape
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue && product"
        @click.self="closeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      >
        <div
          class="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden"
        >
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-20 text-white bg-black/30 rounded-full p-1 hover:bg-black/50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div class="relative w-full md:w-1/2">
            <img
              :src="currentImage"
              :alt="product.name"
              class="w-full h-full aspect-square object-fill"
            />
            <div
              class="absolute inset-0 flex items-center justify-between px-4"
            >
              <button
                @click="prevImage"
                class="text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                @click="nextImage"
                class="text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="w-full md:w-1/2 p-6 overflow-y-auto">
            <h2 class="text-2xl font-bold text-gray-800">{{ product.name }}</h2>

            <div class="mt-6">
              <h3 class="text-sm font-medium text-gray-600">Ukuran</h3>
              <div class="flex flex-wrap gap-2 mt-2">
                <button
                  v-for="variant in product.variants"
                  :key="variant.size"
                  @click="selectedVariant = variant"
                  :class="[
                    'px-4 py-2 text-sm border rounded-md transition',
                    selectedVariant?.size === variant.size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100',
                  ]"
                >
                  {{ variant.size }}
                </button>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="text-sm font-medium text-gray-600">Warna</h3>
              <div class="flex flex-wrap items-center gap-2 mt-2">
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

            <div class="mt-6">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex gap-6" aria-label="Tabs">
                  <button
                    @click="activeTab = 'deskripsi'"
                    :class="[
                      'py-4 px-1 border-b-2 font-medium text-sm',
                      activeTab === 'deskripsi'
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    ]"
                  >
                    Deskripsi
                  </button>
                  <button
                    @click="activeTab = 'detail'"
                    :class="[
                      'py-4 px-1 border-b-2 font-medium text-sm',
                      activeTab === 'detail'
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    ]"
                  >
                    Detail Produk
                  </button>
                </nav>
              </div>

              <div class="py-6 relative overflow-hidden">
                <Transition name="fade-slide" mode="out-in">
                  <div
                    v-if="activeTab === 'deskripsi'"
                    key="deskripsi"
                    class="text-base text-gray-700"
                  >
                    {{ product.description }}
                  </div>
                  <div
                    v-else
                    key="detail"
                    class="text-base text-gray-700 whitespace-pre-wrap"
                  >
                    {{ product.detail }}
                  </div>
                </Transition>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-sm font-medium text-gray-600">Harga</h3>
              <div class="flex items-baseline gap-3 mt-1">
                <span
                  v-if="selectedVariant?.oldPrice"
                  class="text-lg text-gray-500 line-through"
                >
                  Rp {{ selectedVariant?.oldPrice.toLocaleString("id-ID") }}
                </span>
                <span class="text-2xl font-bold text-black">
                  Rp {{ selectedVariant?.price.toLocaleString("id-ID") }}
                </span>
              </div>
            </div>

            <div class="mt-8">
              <button
                class="w-full py-3 px-6 bg-white border border-black rounded-lg font-semibold text-black hover:bg-black hover:text-white transition"
              >
                Pesan Sekarang Melalui WA
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Transisi untuk fade-in dan fade-out backdrop dan modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Transisi untuk scale-up dan scale-down modal */
.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
  transform: scale(0.95);
}
/* transisi tabs */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>