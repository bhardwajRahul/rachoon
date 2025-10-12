<template>
  <div class="logo mt-2 ml-3 text-center">
    <img src="@/assets/logo.png" class="h-10 w-auto inline-block align-middle" />
    <h2 class="ml-2 inline-block align-middle">rachoon</h2>
    <span v-if="useInfo().info" class="text-xs opacity-50 ml-3">{{ useInfo().info.RACHOON_VERSION }}</span>
  </div>
</template>
