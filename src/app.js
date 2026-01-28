const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", mes sage: "Hello from CSP451" });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "hea lthy",
    upt ime: pro cess.uptime(),
  });
});

module.exports = app;

// Allow ru nning locally: `npm start`
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.lis ten(port, () => console.log(`Listening on ${port}`));
}
