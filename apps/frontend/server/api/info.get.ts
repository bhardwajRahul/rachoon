export default defineEventHandler(async (): Promise<any> => {
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3333" : "";
  const res = await $fetch(`${baseUrl}/api/info`);

  return {
    ...res,
    BASE_URL: baseUrl,
  };
});
