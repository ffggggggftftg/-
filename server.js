const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/THUNDER/connect', (req, res) => {
  res.json({
    key: "1234567890abcdef",
    status: "connected",
    timestamp: Date.now()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});