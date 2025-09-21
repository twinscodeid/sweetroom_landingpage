<script lang="ts" setup>
import image_about_1 from "~/assets/image/image_about_1.png";
import image_about_2 from "~/assets/image/image_about_2.png";
</script>

<template>
  <div class="mt-16 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-[123px] py-8 lg:py-12">
    <!-- Section Header -->
    <div class="text-center mb-12 lg:mb-20">
      <div class="inline-flex items-center gap-4 mb-4">
        <div
          class="w-8 h-0.5 bg-gradient-to-r from-transparent to-gray-400"
        ></div>
        <span class="text-sm uppercase tracking-wider text-gray-500 font-medium"
          >About Us</span
        >
        <div
          class="w-8 h-0.5 bg-gradient-to-l from-transparent to-gray-400"
        ></div>
      </div>
      <h2
        id="about"
        class="font-bold text-[#000000] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight"
      >
        Tentang
        <span class="relative inline-block"
          >Sweetroom
          <div
            class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-[#111111] rounded-full opacity-60"
          ></div>
        </span>
      </h2>
      <p class="mt-4 text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
        Menciptakan ruang impian dengan sentuhan keunggulan dan kualitas terbaik
      </p>
    </div>

    <!-- Content Grid -->
    <div class="space-y-12 lg:space-y-16">
      <!-- Desktop Layout -->
      <div
        class="hidden lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12 items-center"
      >
        <!-- Image 1 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              :src="image_about_1"
              alt="Sweetroom Premium Furniture Design Process"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            ></div>
          </div>
        </div>

        <!-- Image 2 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              :src="image_about_2"
              alt="Sweetroom Quality Materials and Craftsmanship"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            ></div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="space-y-6">
          <div class="prose prose-lg">
            <blockquote
              class="text-gray-800 text-lg lg:text-xl leading-relaxed font-medium italic border-l-4 border-[#111111] pl-6"
            >
              "Di Sweetroom, kami percaya bahwa sebuah ruangan lebih dari
              sekadar tempat. Itu adalah cerminan dari kepribadian Anda, tempat
              di mana kenangan dibuat, dan ruang untuk bersantai setelah hari
              yang panjang."
            </blockquote>
          </div>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Berawal dari keyakinan ini, kami berdedikasi untuk menciptakan
              furnitur yang tidak hanya indah secara visual, tetapi juga
              fungsional dan tahan lama.
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile & Tablet Layout -->
      <div class="lg:hidden space-y-8">
        <!-- Text Content First -->
        <div class="text-center space-y-6">
          <blockquote
            class="text-gray-800 text-base sm:text-lg leading-relaxed font-medium italic"
          >
            "Di Sweetroom, kami percaya bahwa sebuah ruangan lebih dari sekadar
            tempat. Itu adalah cerminan dari kepribadian Anda, tempat di mana
            kenangan dibuat, dan ruang untuk bersantai setelah hari yang
            panjang."
          </blockquote>

          <p
            class="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto"
          >
            Berawal dari keyakinan ini, kami berdedikasi untuk menciptakan
            furnitur yang tidak hanya indah secara visual, tetapi juga
            fungsional dan tahan lama.
          </p>

          <!-- Mobile Features -->
          <div class="flex flex-wrap justify-center gap-4 mt-6">
            <div
              class="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full"
            >
              <div class="w-2 h-2 bg-[#111111] rounded-full"></div>
              <span class="text-xs font-medium text-gray-600"
                >Premium Design</span
              >
            </div>
            <div
              class="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full"
            >
              <div class="w-2 h-2 bg-[#111111] rounded-full"></div>
              <span class="text-xs font-medium text-gray-600"
                >Best Quality</span
              >
            </div>
            <div
              class="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full"
            >
              <div class="w-2 h-2 bg-[#111111] rounded-full"></div>
              <span class="text-xs font-medium text-gray-600">Durable</span>
            </div>
          </div>
        </div>

        <!-- Images Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div class="group">
            <div class="relative overflow-hidden rounded-xl shadow-lg">
              <img
                :src="image_about_1"
                alt="Sweetroom Premium Furniture Design"
                class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p class="text-sm font-medium">Design Process</p>
              </div>
            </div>
          </div>

          <div class="group">
            <div class="relative overflow-hidden rounded-xl shadow-lg">
              <img
                :src="image_about_2"
                alt="Sweetroom Quality Craftsmanship"
                class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p class="text-sm font-medium">Quality Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics or Additional Info -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200"
      >
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
            500+
          </div>
          <p class="text-sm text-gray-600">Happy Customers</p>
        </div>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
            50+
          </div>
          <p class="text-sm text-gray-600">Furniture Collections</p>
        </div>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
            5+
          </div>
          <p class="text-sm text-gray-600">Years Experience</p>
        </div>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
            100%
          </div>
          <p class="text-sm text-gray-600">Quality Guarantee</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Prose styling for better typography */
.prose blockquote {
  font-style: italic;
  position: relative;
}

.prose blockquote::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: -20px;
  font-size: 4rem;
  color: #e5e7eb;
  font-family: serif;
}

/* Hover effects for images */
.group:hover img {
  filter: brightness(1.05);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .prose blockquote::before {
    font-size: 2.5rem;
    top: -5px;
    left: -15px;
  }
}
</style>