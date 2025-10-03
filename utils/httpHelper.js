import http from "k6/http";
import { check } from "k6";
import { cfg } from "./config.js";

export function get(path, params = {}) {
  const res = http.get(`${cfg.baseUrl}${path}`, params);
  check(res, { "GET 2xx": (r) => r.status >= 200 && r.status < 300 });
  return res;
}

export function post(path, payload, params = {}) {
  const res = http.post(`${cfg.baseUrl}${path}`, payload, {
    headers: { "Content-Type": "application/json", ...(params.headers || {}) },
    tags: params.tags,
  });
  check(res, { "POST 2xx": (r) => r.status >= 200 && r.status < 300 });
  return res;
}

export function put(path, payload, params = {}) {
  const res = http.put(`${cfg.baseUrl}${path}`, payload, {
    headers: { "Content-Type": "application/json", ...(params.headers || {}) },
    tags: params.tags,
    timeout: params.timeout || cfg.timeout,
    redirects: params.redirects,
  });
  check(res, { "PUT 2xx": (r) => r.status >= 200 && r.status < 300 });
  return res;
}


export function patch(path, payload, params = {}) {
  const res = http.patch(`${cfg.baseUrl}${path}`, payload, buildParams(params));
  check(res, { "PATCH 2xx": (r) => r.status >= 200 && r.status < 300 });
  return res;
}


export function del(path, payload = null, params = {}) {
  const res = http.del(
    `${cfg.baseUrl}${path}`,
    payload,
    {
      headers: { "Content-Type": "application/json", ...(params.headers || {}) },
      tags: params.tags,
      timeout: params.timeout || cfg.timeout,
      redirects: params.redirects,
    }
  );
  check(res, { "DELETE 2xx": (r) => r.status >= 200 && r.status < 300 });
  return res;
}