const { getAllPlanets, addNewLaunch } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllPlanets,
  httpAddNewLaunch,
};
