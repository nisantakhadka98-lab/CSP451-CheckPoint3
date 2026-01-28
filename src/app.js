const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from CSP451" });
});

// ❌ INTENTIONALLY WRONG FOR PART D
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK", // wrong value (tests expect "healthy")
    // uptime missing on purpose
  });
});

module.exports = app;

// Allow running locally: `npm start`
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}
