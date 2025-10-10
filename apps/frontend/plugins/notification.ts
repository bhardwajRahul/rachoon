// vue3-toastify.client.ts
import Vue3Toastify, { toast, type ToastContainerOptions } from "vue3-toastify";
import { useRouter } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.vueApp.use(Vue3Toastify, {
    useHandler: (instance) => instance.use(router),
    position: "bottom-right",
    theme: "auto",
    autoClose: 3000,
    hideProgressBar: true,
    clearOnUrlChange: false, // This prevents clearing on navigation
    // other props...
  } as ToastContainerOptions);

  return {
    provide: { toast },
  };
});
