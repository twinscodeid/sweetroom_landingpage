<script lang="ts" setup>
import image_lampu from "~/assets/image/image_lampu.png";
</script>

<template>
  <div class="px-4 sm:px-6 md:px-8 lg:px-[123px] py-8 md:py-16">
    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16"
    >
      <!-- Text Content -->
      <div
        data-aos="fade-right"
        class="text-[#000000] flex flex-col gap-y-4 lg:gap-y-6 w-full lg:w-1/2 order-2 lg:order-1"
      >
        <h1
          class="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
        >
          "Ciptakan Ruangan Impian Anda dengan Sentuhan
          <span class="text-[#111111] relative">
            Keunggulan
            <div
              class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"
            ></div>
          </span>
          Sweetroom."
        </h1>

        <p
          class="font-normal text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg"
        >
          Jelajahi koleksi furnitur premium kami yang dirancang untuk
          kenyamanan, gaya, dan daya tahan. Setiap produk adalah cerminan dari
          dedikasi kami terhadap kualitas.
        </p>

        <!-- CTA Button -->
        <div class="mt-4 lg:mt-6">
          <a href="#product" class="inline-block group">
            <div
              class="bg-[#111111] hover:bg-gray-800 w-full sm:w-auto max-w-[320px] text-white flex gap-2 justify-between items-center py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <p class="font-medium text-sm sm:text-base whitespace-nowrap">
                Temukan Furnitur Favorit Anda
              </p>
              <div
                class="flex-shrink-0 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
              >
                <img
                  src="/circled_right.svg"
                  alt="arrow"
                  class="w-full h-full"
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Image Content -->
      <div
        class="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
      >
        <div class="relative group">
          <!-- Background decoration -->
          <div
            class="absolute -inset-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          ></div>

          <!-- Main image -->
          <div class="relative overflow-hidden rounded-xl">
            <img
              data-aos="fade-down"
              :src="image_lampu"
              alt="Sweetroom Premium Furniture"
              class="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Floating elements for visual interest -->
          <div
            class="absolute top-4 right-4 w-3 h-3 bg-[#111111] rounded-full opacity-60 animate-pulse"
          ></div>
          <div
            class="absolute bottom-8 left-4 w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-pulse"
            style="animation-delay: 1s"
          ></div>
        </div>
      </div>
    </div>

    <!-- Optional: Scroll indicator -->
    <div class="flex justify-center mt-14">
      <div
        class="flex flex-col items-center gap-2 text-gray-400 animate-bounce"
      >
        <p class="text-xs uppercase tracking-wider">Scroll Down</p>
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Responsive text adjustments */
@media (max-width: 640px) {
  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
}

/* Hover effects */
.group:hover .transform {
  transform: scale(1.02);
}

/* Custom gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #111111 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>