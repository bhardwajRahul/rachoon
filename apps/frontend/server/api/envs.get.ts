export default defineEventHandler(() => {
  return {
    BASE_URL: process.env.BASE_URL || "http://localhost:3333",
  };
});
