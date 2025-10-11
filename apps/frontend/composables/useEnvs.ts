class EnvStore {
  envs = <Ref<null | any>>ref(null);

  loading = ref(false);
  init = async () => {
    if (this.envs.value !== null) return;
    this.loading.value = true;
    this.envs.value = ((await useFetch("/app/envs")) as any).data.value;
    console.log("BASE_URL:", await this.envs.value.BASE_URL);
    this.loading.value = false;
  };
}

export default defineStore("envs", () => new EnvStore());
