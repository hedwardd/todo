require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require("./app/models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const forceDBSync = process.env.NODE_ENV === 'DEV';

db.sequelize.sync({ force: forceDBSync }).then(() => {
  if (forceDBSync)
    console.log("Dropped and re-synced db.");
  else
    console.log("Re-synced db.");
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Set routes
require("./app/routes/task.routes")(app);
require("./app/routes/list.routes")(app);

// The 'catchall' handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
