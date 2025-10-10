<script setup lang="ts">
const isActive = (path: string) => {
  return useRoute().fullPath.includes(path) && !useRoute().fullPath.includes("settings");
};
</script>

<template>
  <ul class="menu gap-1">
    <li>
      <NuxtLink href="/" :class="useRoute().fullPath === '/' ? 'active' : ''">
        <FaIcon icon="fa-solid fa-home" />
        Dashboard
      </NuxtLink>
    </li>

    <li>
      <NuxtLink href="/clients" :class="isActive('/clients') ? 'active' : ''">
        <FaIcon icon="fa-solid fa-user-tie" />
        Clients
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="/offers" :class="isActive('/offers') ? 'active' : ''">
        <FaIcon icon="fa-solid fa-file-contract" />
        Offers
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="/invoices" :class="isActive('/invoices') ? 'active' : ''">
        <FaIcon icon="fa-solid fa-file-invoice" />
        Invoices
      </NuxtLink>
    </li>
    <li>
      <NuxtLink href="/reminders" :class="isActive('/reminders') ? 'active' : ''">
        <FaIcon icon="fa-solid fa-file-lines" />
        Reminders
      </NuxtLink>
    </li>
  </ul>
</template>
