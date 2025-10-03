import { defaultThresholds } from "../utils/thresholds.js";
import { buildScenario } from "../utils/profiles.js";
import { runCourseCompletion } from "../workflows/courseCompletion.js";



export const options = {
  thresholds: defaultThresholds,
  scenarios: {
    course_completion: buildScenario(__ENV.PROFILE, "courseCompletion", {
      suite: "workflow",
      name: "courseCompletion",
    }),
  },
};


export function courseCompletion() {
  runCourseCompletion();
}

export { handleSummary } from "../utils/report.js";