const { app } = require("@azure/functions");

app.http("ping", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    return { jsonBody: { ok: true, ts: new Date().toISOString() } };
  }
});
