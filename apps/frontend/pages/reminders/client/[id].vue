<script setup lang="ts">
definePageMeta({
  layout: "core",
});
</script>

<template>
  <div>
    <DocumentList :filter="['clientId', '=', useRoute().params.id as string]" />
  </div>
</template>
