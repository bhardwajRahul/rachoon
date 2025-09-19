<script setup lang="ts">
definePageMeta({
  layout: "core",
});
const route = useRoute();
const slot = route.params.slot as string;

function save(e: any) {
  e.preventDefault();
  useSettings().save();
}
</script>

<template>
  <form @submit="save">
    <FormHeader title="Settings" description="Manage your application settings" icon="fa-solid fa-gear">
      <template #buttons>
        <button type="submit" class="btn btn-sm btn-neutral">
          <FaIcon icon="fa-solid fa-save " />
          Save
        </button>
      </template>
      >
    </FormHeader>
    <div class="flex gap-2"></div>
    <SettingsOrganization v-if="slot === 'organization'" />
    <SettingsLocale v-if="slot === 'locale'" />
    <SettingsTaxes v-if="slot === 'taxes'" />
    <SettingsUnits v-if="slot === 'units'" />
    <SettingsNumbering v-if="slot === 'numbering'" />
  </form>
</template>
