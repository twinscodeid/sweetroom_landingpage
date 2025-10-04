<script lang="ts" setup>
// Mengimpor gambar banner dari folder assets
import banner from "~/assets/image/banner.png";

const hoveredIcon = ref<string | null>(null);
// Data untuk ikon sosial media agar mudah dikelola
// Diperbarui dengan tautan dan ikon yang benar + penambahan platform baru
const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6281229280159?text=Halo,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20desain%20interior.",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
    </svg>
    `,
  },
  {
    name: "Email",
    href: "mailto:sweet.roomfurn@gmail.com",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sweetroomfurn",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@sweetroomfurni",
    icon: `/tik-tok.png`,
    iconDark: `/tik-tok-dark.png`,
  },
  {
    name: "Tokopedia",
    href: "https://www.tokopedia.com/sweetroomfurni",
    icon: `tokopedia.png`,
    iconDark: `tokopedia-dark.png`,
  },
];
</script>

<template>
  <div
    class="relative w-full h-[500px] md:h-[650px] bg-cover bg-center text-white mb-20"
    :style="{ backgroundImage: `url(${banner})` }"
  >
    <div id="contact" class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 container mx-auto px-4 h-full flex items-center">
      <div class="max-w-2xl">
        <svg
          class="w-32 h-32 absolute top-4 md:top-8 -left-4 md:left-0 opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        >
          <path d="M2 12h20M12 2v20" />
          <path d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" />
          <path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
        </svg>

        <div class="relative">
          <p data-aos="fade-right" class="mb-2 text-gray-300">
            Konsultasi di rumah, di toko, atau melalui virtual:
          </p>
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Interior Desain
          </h1>
          <p
            data-aos-delay="200"
            data-aos="fade-right"
            class="mt-6 text-base italic text-gray-200"
          >
            "Ada pertanyaan tentang produk kami atau butuh bantuan dalam memilih
            furnitur yang tepat? Tim kami siap membantu."
          </p>
        </div>

        <a
          href="https://wa.me/6281229280159?text=Halo,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20desain%20interior."
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          class="mt-8 inline-block bg-gray-200 cursor-pointer text-black font-semibold py-3 px-8 rounded-lg hover:bg-white transition duration-300"
        >
          Konsultasi sekarang
        </a>

        <div class="flex items-center gap-3 mt-10">
          <a
            data-aos="fade-up"
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="hoveredIcon = social.name"
            @mouseleave="hoveredIcon = null"
            class="w-10 h-10 border border-white/50 rounded-md flex items-center justify-center hover:bg-white group transition-colors duration-300"
          >
            <img
              v-if="social.icon.endsWith('.png')"
              :src="
                hoveredIcon === social.name && social.iconDark
                  ? social.iconDark
                  : social.icon
              "
              :alt="social.name"
              class="w-7 h-7 object-fill z-30"
            />
            <span
              v-else
              class="text-white group-hover:text-black transition-colors duration-300"
              v-html="social.icon"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>