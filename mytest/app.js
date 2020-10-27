const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter.js");
const photoRouter = require("./routes/photosRouter.js");
app.use("/", indexRouter);
app.use("/photos", photoRouter);
app.listen(8080, () => console.log("listening on port 8080"));
