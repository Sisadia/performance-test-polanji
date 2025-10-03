import { defaultThresholds } from "../utils/thresholds.js";
import { buildScenario } from "../utils/profiles.js";
import { login } from "../clients/authClient.js";
import { getCourses, getTopics } from "../clients/endpointsClient.js";


export const options = {
  thresholds: defaultThresholds,
  scenarios: {
    endpoints_runner: buildScenario(__ENV.PROFILE, "endpoints", {
      suite: "endpoints",
    }),
  },
};

export function endpoints() {
  getTopics();
  const { token } = login(__ENV.USER_EMAIL, __ENV.USER_PASSWORD);
  getCourses(token);
}