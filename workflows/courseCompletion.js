import { login } from "../clients/authClient.js";
import { getCourses, enroll, quizComplete, updateProgress } from "../clients/endpointsClient.js";
import { cfg } from "../utils/config.js";
import { check, group } from "k6";

export function runCourseCompletion() {

  const { token } = login(cfg.userEmail, cfg.userPassword);

  group("Course Completion Flow", () => {

    const res = getCourses(token);
    const body = res.json();
    check(body, { "has courses": (b) => Array.isArray(b) && b.length > 0 });
    
    const courseId = body?.[0]?.id;
    const sectionIndex = 0;

    enroll(token, courseId);

    updateProgress(token, courseId, sectionIndex, 0.5);

    quizComplete(token, courseId, sectionIndex);
    
    updateProgress(token, courseId, sectionIndex, 1.0);
  });
}
