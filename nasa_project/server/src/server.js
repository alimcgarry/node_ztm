const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 7069;

const MONGO_URL =
  "mongodb+srv://nasa-api:K2x5XJPvawBAYC4T@nasacluster.qyou6hf.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
}

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

startServer();
