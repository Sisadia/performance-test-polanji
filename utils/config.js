export const cfg = {
  baseUrl: __ENV.BASE_URL || "https://api.polanji.com",
  userEmail: __ENV.USER_EMAIL || "kadowib395@bitmens.com",
  userPassword: __ENV.USER_PASSWORD || "PT01_123456",
  db: {
    host: __ENV.DB_HOST,
    name: __ENV.DB_NAME,
    user: __ENV.DB_USER,
    pass: __ENV.DB_PASS,
  },
  timeout: __ENV.TIMEOUT || "60s"
};
