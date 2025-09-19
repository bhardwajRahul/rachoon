<script setup>
const units = useSettings().settings.units;
const defaultUnit = ref(units.findIndex((u) => u.default));
</script>
<template>
  <FormSection
    title="Units"
    description="Set the units. Default is applied to all new positions."
  >
    <table class="table table-compact table-zebra w-full m-0">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Default</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(u, i) in units" :key="i">
          <td>
            <div class="form-control">
              <input
                type="text"
                placeholder="title"
                v-model="u.title"
                class="input input-bordered input-sm"
              />
            </div>
          </td>
          <td>
            <div class="form-control">
              <input
                type="radio"
                class="radio radio-success"
                :value="i"
                v-model="defaultUnit"
                @change="useSettings().settings.setDefaultUnit(i)"
              />
            </div>
          </td>
          <td class="text-right">
            <button
              class="btn btn-square btn-sm mr-2"
              @click="useSettings().settings.removeUnit(i)"
            >
              <FaIcon icon="fa-trash-can" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-5">
      <button
        class="btn btn-xs btn-info btn-outline gap-1"
        @click="useSettings().settings.addUnit()"
      >
        <FaIcon icon="fa-add mr-5" />Add unit
      </button>
    </div>
  </FormSection>
</template>
