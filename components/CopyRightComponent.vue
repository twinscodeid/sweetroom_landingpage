<script lang="ts" setup>
const date = new Date().getFullYear();
</script>
<template>
  <div
    class="w-full h-12 fixed bottom-0 z-40 bg-[#FFFFFF] flex items-center py-12 justify-center"
  >
    <h5 class="text-center text-[#111111] font-medium">
      Copyright © - All Rights Reserved - {{ date }} sweetroom.com
    </h5>
  </div>
</template>

<style>
</style>