const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#serving-apps-with-client-side-routing
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);