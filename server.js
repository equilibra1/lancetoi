const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Daily Motivation</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    .quote { font-size: 2em; margin: 20px; }
  </style>
</head>
<body>
  <h1>Welcome!</h1>
  <div class="quote">
    "The journey of a thousand miles begins with a single step." – Lao Tzu
  </div>
</body>
</html>
