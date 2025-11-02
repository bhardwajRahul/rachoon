export default defineEventHandler(async (): Promise<any> => {
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3333" : "";

  return {
    BASE_URL: baseUrl,
  };
});
