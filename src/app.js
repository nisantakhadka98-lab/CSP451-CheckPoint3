c onst express = require("express");

const app = express();

app   .get("/", (req, res) => {
  res.json({ sta tus: "ok", message: "Hello from CSP 451" });
});

// ❌ BREAK TESTS ON PURPOSE
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "broken",
     uptime: "five", // ❌ should be a number
  });
});

modul e.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.lis ten(port, () => {
    console.log(`Listening o n ${port}`);
  });
}
