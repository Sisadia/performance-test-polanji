import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "reports/summary.json": JSON.stringify(data, null, 2),
    "reports/summary.html": htmlReport(data),
  };
}
