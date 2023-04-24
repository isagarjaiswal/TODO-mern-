import {app} from "./index.js"
import {connectDB} from "./data/database.js"

connectDB();


app.listen(process.env.PORT, () => {
    console.log("Server is working on this port => http://localhost:4000");
  });
  