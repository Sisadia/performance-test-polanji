import { get, post, put } from "../utils/httpHelper.js";

function authHeader(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function getTopics(token){
  return get("/topics",{headers:authHeader(token), tags:{ api: "topics", op:"topicList"}})
}

export function getCourses(token) {
  return get("/courses", { headers: authHeader(token), tags: { api: "courses", op: "courseList" }});
}

export function enroll(token, courseId) {
  return post("/enroll", JSON.stringify({ course_id: courseId }), { headers: authHeader(token), tags: { api: "courses", op: "enroll" }});
}

export function updateProgress(token, courseId, progress) {
  return put("/courses/update_progress",
    JSON.stringify({ course_id: courseId, section_index: progress }),
    { headers: authHeader(token), tags: { api: "courses", op: "update_progress" }});
}

export function quizComplete(token, courseId, sectionIdx) {
  return post(`/courses/${courseId}/sections/${sectionIdx}/quiz-complete`, JSON.stringify({}),
    { headers: authHeader(token), tags: { api: "courses", op: "quiz_complete" }});
}
