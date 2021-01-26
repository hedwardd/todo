require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());



const db = require("./app/models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

require("./app/routes/task.routes")(app);

// The 'catchall' handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// (async () => {
//   const db = await initDb();
//   if (db) {
//     const port = process.env.PORT || 5000;
//     app.listen(port);
//     console.log(`App listening on ${port}`);
//   }
// })();
