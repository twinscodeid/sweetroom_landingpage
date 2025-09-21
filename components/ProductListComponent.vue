<script lang="ts" setup>
import { useProducts } from "~/composable/useProducts";
const { products, pending, error } = useProducts();
</script>

<template>
  <div class="px-4 sm:px-6 md:px-8 lg:px-[123px] pb-8 sm:pb-10 md:pb-14">
    <!-- Section Header -->
    <div class="text-center mb-12 lg:mb-20">
      <div class="inline-flex items-center gap-4 mb-4">
        <div
          class="w-8 h-0.5 bg-gradient-to-r from-transparent to-gray-400"
        ></div>
        <span class="text-sm uppercase tracking-wider text-gray-500 font-medium"
          >Our Products</span
        >
        <div
          class="w-8 h-0.5 bg-gradient-to-l from-transparent to-gray-400"
        ></div>
      </div>
      <h2
        id="product"
        class="font-bold text-[#000000] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight"
      >
        <span class="relative inline-block"
          >Product
          <div
            class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-[#111111] rounded-full opacity-60"
          ></div>
        </span>
      </h2>
      <p class="mt-4 text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
        Temukan furnitur premium berkualitas tinggi untuk mewujudkan rumah
        impian Anda
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
    >
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
        :pending="pending"
        :error="error"
      />
    </div>
  </div>
</template>

<style>
</style>