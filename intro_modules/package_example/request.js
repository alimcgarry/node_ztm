const axios = require("axios");

axios
  .get("https://wvb ww.google.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("All done!!");
  });
