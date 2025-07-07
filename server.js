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
