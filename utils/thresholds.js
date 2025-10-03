export const defaultThresholds = {
  http_req_duration: ["p(90)<800", "p(95)<1200"],
  http_req_failed: ["rate<0.01"],
};
