const MoviesService = require("../services/moviesService");

class MoviesController {
  static findMany = async (req, res) => {
    const data = await MoviesService.findMany(req.query);

    res.json(data);
  };

  static create = async (req, res) => {
    // req.file => file images
    // req.body => data games
    const data = await MoviesService.create(req.file, req.body);
    console.log;
    res.json({ msg: "Data is created successfully", data });
  };

  static update = async (req, res) => {
    const updateMovie = await MoviesService.update(req.query, req.body);
    res.json({ msg: "Data is updated successfully", updateMovie });
  };

  static delete = async (req, res) => {
    const data = await MoviesService.delete(req.query);
    res.json({ msg: "Data is deleted successfully", data });
  };
}
module.exports = MoviesController;
