const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from CSP451" });
});

// ❌ VALID CODE, BUT FAILS TESTS
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: "not-a-number", // ❌ tests expect a number
  });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}

