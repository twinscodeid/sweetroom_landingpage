<script setup lang="ts">
const siteUrl = "https://sweetroom.netlify.app/";

const defaultOgImage = `${siteUrl}/logo_sweetroom_rmbg_1.svg`;
const socialProfiles = [
  "https://www.instagram.com/sweetroomfurn",
  "https://www.tiktok.com/@sweetroomfurni",
  "https://www.tokopedia.com/sweetroomfurni",
];

useSeoMeta({
  title: "Sweetroom - Furnitur Minimalis & Fungsional",
  ogTitle: "Sweetroom - Furnitur Minimalis & Fungsional",

  description:
    "Di Sweetroom, kami menciptakan furnitur yang indah, fungsional, dan tahan lama. Temukan koleksi meja, sofa, dan kursi untuk mencerminkan kepribadian Anda.",
  ogDescription:
    "Di Sweetroom, kami menciptakan furnitur yang indah, fungsional, dan tahan lama. Temukan koleksi meja, sofa, dan kursi untuk mencerminkan kepribadian Anda.",

  ogImage: defaultOgImage,

  ogSiteName: "Sweetroom",

  ogType: "website",
});
useHead({
  title: "Sweetroom",
  meta: [
    {
      name: "description",
      content:
        "i Sweetroom, kami percaya bahwa sebuah ruangan lebih dari sekadar tempat. Itu adalah cerminan dari kepribadian Anda, tempat di mana kenangan dibuat, dan ruang untuk bersantai setelah hari yang panjang. Berawal dari keyakinan ini, kami berdedikasi untuk menciptakan furnitur yang tidak hanya indah secara visual, tetapi juga fungsional dan tahan lama.",
    },
  ],
  htmlAttrs: {
    lang: "id",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo_sweetroom_rmbg_1.svg",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Sweetroom",
        url: siteUrl,
        logo: `${siteUrl}/logo_sweetroom_rmbg_1.svg`,
        sameAs: socialProfiles,
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
