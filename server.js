//import app
const app = require("./backend/app");
//app is running on http://localhost:3000
//app is istening on port 3000
app.listen(3000, () => {
  console.log("Express Application is running on port 3000");
});
