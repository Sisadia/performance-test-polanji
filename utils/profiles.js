export function buildScenario(profile, execName, extraTags = {}) {
  
    const common = {
    gracefulStop: "30s",
    gracefulRampDown: "30s",
    tags: extraTags,
    exec: execName,
  };

  switch ((profile || "load").toLowerCase()) {
    case "stress":
      return {
        executor: "ramping-vus",
        stages: [
          { duration: "2m", target: 3 },
          { duration: "3m", target: 8 },
          { duration: "2m", target: 20 },
          { duration: "1m", target: 0 },
        ],
        ...common,
        tags: { ...extraTags, profile: "stress", suite: "endpoints" },
      };

    case "spike":
      return {
        executor: "ramping-vus",
        stages: [
          { duration: "10s", target: 1 },
          { duration: "10s", target: 20 },
          { duration: "30s", target: 0 },
        ],
        ...common,
        tags: { ...extraTags, profile: "spike", suite: "endpoints" },
      };

    case "soak":
      return {
        executor: "constant-vus",
        vus: 15,
        duration: "3m",
        ...common,
        tags: { ...extraTags, profile: "endurance", suite: "endpoints" },
      };

    case "load":
    default:
      return {
        executor: "ramping-vus",
        stages: [
          { duration: "1m", target: 5 },
          { duration: "2m", target: 10 },
          { duration: "1m", target: 15 },
          { duration: "30s", target: 20 },
        ],
        ...common,
        tags: { ...extraTags, profile: "load", suite: "endpoints" },
      };

    case "custom":
      return {
        executor: "constant-vus",
        vus: Number(__ENV.VUS || 5),
        duration: __ENV.DURATION || "60s",
        ...common,
        tags: { ...extraTags, profile: "custom" },
      };
  }
}