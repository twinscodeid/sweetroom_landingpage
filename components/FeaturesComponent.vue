<script lang="ts" setup>
import card_payment from "~/assets/image/card_payment.svg";
import computer_chat from "~/assets/image/computer_chat.svg";
import delivery_time from "~/assets/image/delivery_time.svg";
</script>

<template>
  <div
    class="relative bg-[#111111] my-8 sm:my-12 lg:my-[121px] overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full"
      ></div>
    </div>

    <div
      class="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-[154px]"
    >
      <!-- Section Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-4 mb-4">
          <div
            class="w-8 h-0.5 bg-gradient-to-r from-transparent to-white/40"
          ></div>
          <span
            class="text-xs sm:text-sm uppercase tracking-wider text-white/70 font-medium"
            >Keunggulan Kami</span
          >
          <div
            class="w-8 h-0.5 bg-gradient-to-l from-transparent to-white/40"
          ></div>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Mengapa Memilih <span class="text-gray-300">Sweetroom?</span>
        </h2>
        <p class="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
          Nikmati kemudahan berbelanja furnitur premium dengan layanan terbaik
          dari kami
        </p>
      </div>

      <!-- Features Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
      >
        <!-- Feature 1: Free Shipping -->
        <div class="group">
          <div
            data-aos="fade-right"
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-2"
          >
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div class="relative bg-white/10 p-4 rounded-full">
                  <img
                    :src="delivery_time"
                    alt="Free shipping and installation"
                    class="w-12 h-12 sm:w-16 sm:h-16 mx-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="text-center">
              <h4
                class="font-bold text-lg sm:text-xl text-white mb-4 group-hover:text-gray-100 transition-colors"
              >
                Gratis Ongkir & Instalasi
              </h4>
              <p
                class="text-white/80 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors"
              >
                Untuk setiap pengiriman ke area
                <span class="font-medium text-white"
                  >Sleman, Bantul, dan Daerah Istimewa Yogyakarta</span
                >
                dengan minimum pembelian sebesar
                <span class="font-semibold text-white">4 Juta</span>.
              </p>

              <!-- Additional info -->
              <div class="mt-4 pt-4 border-t border-white/10">
                <div
                  class="flex items-center justify-center gap-2 text-xs text-white/60"
                >
                  <div
                    class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  ></div>
                  <span>Area Coverage: DIY & Sekitarnya</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: 0% Installment -->
        <div class="group">
          <div
            data-aos="zoom-in"
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-2"
          >
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div class="relative bg-white/10 p-4 rounded-full">
                  <img
                    :src="card_payment"
                    alt="0% installment payment options"
                    class="w-12 h-12 sm:w-16 sm:h-16 mx-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="text-center">
              <h4
                class="font-bold text-lg sm:text-xl text-white mb-4 group-hover:text-gray-100 transition-colors"
              >
                Cicilan 0%
              </h4>
              <p
                class="text-white/80 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors"
              >
                Berbagai pilihan solusi pembayaran, melalui
                <span class="font-medium text-white">cicilan 0%</span> dengan
                kartu kredit atau tanpa kartu kredit, untuk memudahkan Anda
                mewujudkan rumah impian.
              </p>

              <!-- Payment options -->
              <div class="mt-4 pt-4 border-t border-white/10">
                <div
                  class="flex flex-wrap justify-center gap-2 text-xs text-white/60"
                >
                  <span class="bg-white/10 px-2 py-1 rounded-full"
                    >Credit Card</span
                  >
                  <span class="bg-white/10 px-2 py-1 rounded-full"
                    >Bank Transfer</span
                  >
                  <span class="bg-white/10 px-2 py-1 rounded-full"
                    >Digital Wallet</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Free Consultation -->
        <div class="group md:col-span-2 xl:col-span-1">
          <div
            data-aos="fade-left"
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-2"
          >
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div class="relative bg-white/10 p-4 rounded-full">
                  <img
                    :src="computer_chat"
                    alt="Free design consultation service"
                    class="w-12 h-12 sm:w-16 sm:h-16 mx-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="text-center">
              <h4
                class="font-bold text-lg sm:text-xl text-white mb-4 group-hover:text-gray-100 transition-colors"
              >
                Gratis Konsultasi Desain
              </h4>
              <p
                class="text-white/80 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors"
              >
                Tak perlu kesulitan merencanakan ruang hunian.
                <span class="font-medium text-white"
                  >Konsultasikan langsung</span
                >
                dengan tim desain dan mitra-mitra kami yang selalu siap
                melayani.
              </p>

              <!-- Consultation info -->
              <div class="mt-4 pt-4 border-t border-white/10">
                <div
                  class="flex items-center justify-center gap-2 text-xs text-white/60"
                >
                  <div
                    class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  ></div>
                  <span>24/7 Design Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.group:hover .animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Responsive grid adjustments */
@media (min-width: 768px) and (max-width: 1279px) {
  .md\:col-span-2:last-child {
    grid-column: span 2 / span 2;
    max-width: 50%;
    margin: 0 auto;
  }
}

/* Hover animation for cards */
.group {
  transition: all 0.3s ease;
}

.group:hover {
  transform: translateY(-8px);
}

/* Icon filter animations */
.group:hover img {
  filter: brightness(0) invert(1);
  transform: scale(1.1);
  transition: all 0.3s ease;
}
</style>