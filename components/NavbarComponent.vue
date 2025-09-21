<template>
  <div>
    <!-- Main Navbar -->
    <div
      ref="navbar"
      class="px-4 md:px-[123px] transition-all duration-300 ease-in-out"
      :class="{
        'fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-gray-100':
          isSticky,
        'relative bg-transparent': !isSticky,
      }"
    >
      <div
        class="flex justify-between items-center"
        :class="isSticky ? 'py-3' : 'mt-4 py-2'"
      >
        <!-- Logo -->
        <div class="flex gap-3 items-center">
          <img src="/logo_sweetroom_rmbg_1.svg" alt="logo" class="w-8 h-8" />
          <h2 class="font-bold text-xl md:text-2xl text-gray-800">Sweetroom</h2>
        </div>

        <!-- Desktop Navigation -->
        <nav
          class="hidden md:flex items-center gap-8 lg:gap-12 font-medium text-base"
        >
          <a
            href="#home"
            class="text-gray-700 hover:text-[#111111] transition-colors duration-200 relative group"
          >
            Home
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#111111] transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#about"
            class="text-gray-700 hover:text-[#111111] transition-colors duration-200 relative group"
          >
            About Us
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#111111] transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#product"
            class="text-gray-700 hover:text-[#111111] transition-colors duration-200 relative group"
          >
            Product
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#111111] transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#contact"
            class="text-gray-700 hover:text-[#111111] transition-colors duration-200 relative group"
          >
            Contact Us
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#111111] transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
          :class="{ 'bg-gray-100': isMobileMenuOpen }"
        >
          <!-- Hamburger Icon -->
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span
              class="block w-5 h-0.5 bg-gray-800 transition-all duration-300 transform origin-center"
              :class="{
                'rotate-45 translate-y-1': isMobileMenuOpen,
                'rotate-0 translate-y-0': !isMobileMenuOpen,
              }"
            ></span>
            <span
              class="block w-5 h-0.5 bg-gray-800 transition-all duration-300 mt-1"
              :class="{
                'opacity-0': isMobileMenuOpen,
                'opacity-100': !isMobileMenuOpen,
              }"
            ></span>
            <span
              class="block w-5 h-0.5 bg-gray-800 transition-all duration-300 transform origin-center mt-1"
              :class="{
                '-rotate-45 -translate-y-2': isMobileMenuOpen,
                'rotate-0 translate-y-0': !isMobileMenuOpen,
              }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Navigation Menu -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-40 md:hidden"
      :class="{
        'translate-x-0': isMobileMenuOpen,
        'translate-x-full': !isMobileMenuOpen,
      }"
    >
      <!-- Mobile Menu Header -->
      <div
        class="flex items-center justify-between p-4 border-b border-gray-200"
      >
        <div class="flex gap-2 items-center">
          <img src="/logo_sweetroom_rmbg_1.svg" alt="logo" class="w-6 h-6" />
          <h3 class="font-bold text-lg text-gray-800">Sweetroom</h3>
        </div>
      </div>

      <!-- Mobile Menu Links -->
      <nav class="flex flex-col p-4 space-y-4">
        <a
          href="#home"
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-[#111111] transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-[#111111] flex items-center gap-3"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          Home
        </a>
        <a
          href="#about"
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-[#111111] transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-[#111111] flex items-center gap-3"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          About Us
        </a>
        <a
          href="#product"
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-[#111111] transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-[#111111] flex items-center gap-3"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            ></path>
          </svg>
          Product
        </a>
        <a
          href="#contact"
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-[#111111] transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-[#111111] flex items-center gap-3"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Contact Us
        </a>
      </nav>

      <!-- Mobile Menu Footer -->
      <div class="absolute bottom-4 left-4 right-4 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-600 text-center">© 2024 Sweetroom</p>
      </div>
    </div>

    <!-- Placeholder untuk mencegah layout shift -->
    <div
      v-if="isSticky"
      :style="{ height: navbarHeight + 'px' }"
      class="w-full"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const navbar = ref<HTMLElement>();
const isSticky = ref(false);
const navbarHeight = ref(0);
const triggerPosition = ref(200);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  const scrollY = window.scrollY;

  if (scrollY >= triggerPosition.value) {
    if (!isSticky.value) {
      isSticky.value = true;
      if (navbar.value) {
        navbarHeight.value = navbar.value.offsetHeight;
      }
    }
  } else {
    isSticky.value = false;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

// Close mobile menu when screen size changes to desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  if (navbar.value) {
    navbarHeight.value = navbar.value.offsetHeight;
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);

  // Reset body overflow when component unmounts
  document.body.style.overflow = "";
});

defineExpose({
  setTriggerPosition: (position: number) => {
    triggerPosition.value = position;
  },
  closeMobileMenu,
});
</script>

<style scoped>
/* Smooth scrolling untuk anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar untuk mobile menu jika diperlukan */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.mobile-menu::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>