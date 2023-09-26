const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let otp = "";
const port = process.env.PORT || 3001;

app.post("/get-otp", (request, response) => {
  const { mobileNumber } = request.body;
  console.log(mobileNumber);
  otp = Math.floor(1000 + Math.random() * 9000).toString();
  response.send(otp);
});
app.listen(port);

app.post("/verify-otp", (request, response) => {
  const { enteredOTP } = request.body;
  if (otp === enteredOTP) {
    response.send("Verified");
  } else {
    response.status(400).send("Incorrect");
  }
});
