<template>
  <div class="dropdown dropdown-leftx dropdown-end">
    <div tabindex="0" class="btn btn-sm btn-ghost">
      <FaIcon icon="fa-solid fa-ellipsis-vertical" class="cursor-pointer" />
    </div>
    <ul
      tabindex="0"
      class="dropdown-content menu menu-compact p-2 shadow bg-base-100 border-error rounded-box w-52"
    >
      <slot />
    </ul>
  </div>
</template>
