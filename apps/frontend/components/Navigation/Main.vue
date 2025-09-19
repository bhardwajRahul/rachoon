<template>
  <ul class="menu gap-1">
    <li>
      <NuxtLink
        href="/clients"
        :class="useRoute().fullPath.includes('/clients') ? 'active' : ''"
        ><FaIcon icon="fa-solid fa-user" /> Clients
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/offers"
        :class="useRoute().fullPath.includes('/offers') ? 'active' : ''"
      >
        <FaIcon icon="fa-solid fa-file-invoice" /> Offers
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/invoices"
        :class="useRoute().fullPath.includes('/invoices') ? 'active' : ''"
      >
        <FaIcon icon="fa-solid fa-file-invoice-dollar" /> Invoices
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/users"
        :class="useRoute().fullPath.includes('/users') ? 'active' : ''"
      >
        <FaIcon icon="fa-solid fa-user" /> Users
      </NuxtLink>
    </li>
  </ul>
</template>
