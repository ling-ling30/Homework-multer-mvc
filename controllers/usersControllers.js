const UsersService = require("../services/UsersService");

class UsersController {
  static findMany = async (req, res) => {
    const data = await UsersService.findMany(req.query);

    res.json(data);
  };

  static create = async (req, res) => {
    // req.file => file images
    // req.body => data games
    const data = await UsersService.create(req.file, req.body);
    console.log;
    res.json({ msg: "Data is created successfully", data });
  };

  static update = async (req, res) => {
    const data = await UsersService.update(req.query, req.body);
    res.json({ msg: "Data is updated successfully", data });
  };

  static delete = async (req, res) => {
    const data = await UsersService.delete(req.query);
    res.json({ msg: "Data is deleted successfully", data });
  };
}
module.exports = UsersController;
