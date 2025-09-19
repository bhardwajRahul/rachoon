<template>
  <div class="px-10 pt-5 flex gap-5 justify-between prose">
    <h3>
      <FaIcon :icon="`fa-solid ${$props.icon}`" />
      {{ $props.title }}
    </h3>
    <div class="flex gap-2">
      <slot name="buttons" />
    </div>
  </div>
  <div class="divider m-0" v-if="$props.divider"></div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: false, default: "fa-user" },
  divider: { type: Boolean, required: false, default: true },
});
</script>
