//the one who doing the bussines logic, like filtering or search item in datbase

const UsersRepository = require("../repositories/usersRepository");
const CustomAPIError = require("../utils/custom-error");

class UsersService {
  static findMany = async (query) => {
    const { id, role, gender, email } = query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    }
    if (email) {
      queryObject.email = email;
    }
    if (role) {
      queryObject.role = { contains: role, mode: "insensitive" };
    }
    if (gender) {
      queryObject.gender = { contains: gender, mode: "insensitive" };
    }

    const data = await UsersRepository.findMany(queryObject);
    if (data.length < 1) {
      throw new CustomAPIError("No User found", 400);
    }
    return data;
  };

  static create = async (file, body) => {
    const { role, gender, email, password } = body;
    const data = {};
    if (role) {
      data.role = role;
    }
    if (gender) {
      data.gender = gender;
    }
    if (email) {
      data.email = email;
    }
    if (password) {
      data.password = password;
    }

    if (!data.role || !data.email || !data.gender || !data.password) {
      throw new CustomAPIError(
        "Please provide Email, Password, Role and Gender ",
        400
      );
    }
    return UsersRepository.create(data);
  };

  static update = async (query, body) => {
    //check query
    const { id, role, gender, email } = query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    }
    if (email) {
      queryObject.email = { contains: role, mode: "insensitive" };
    }
    if (role) {
      queryObject.role = { contains: role, mode: "insensitive" };
    }
    if (gender) {
      queryObject.gender = { contains: gender, mode: "insensitive" };
    }
    const movie = await UsersRepository.findMany(queryObject);
    if (movie.length > 1) {
      throw new CustomAPIError("Please give more specific details!", 400);
    }
    //check body
    const bodyObject = {};
    if (body.role) {
      bodyObject.role = body.role;
    }
    if (body.gender) {
      bodyObject.gender = body.gender;
    }
    if (body.email) {
      bodyObject.email = body.email;
    }

    if (!bodyObject.role && !bodyObject.email && !bodyObject.gender) {
      throw new CustomAPIError("Please provide role, email, gender", 400);
    }

    const updatedUser = await UsersRepository.update(queryObject, bodyObject);
    return updatedUser;
  };

  static delete = async (query) => {
    const { id, role, gender, email } = query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    }
    if (email) {
      queryObject.email = { contains: email, mode: "insensitive" };
    }
    if (role) {
      queryObject.role = { contains: role, mode: "insensitive" };
    }
    if (gender) {
      queryObject.gender = { contains: gender, mode: "insensitive" };
    }

    const deletedMovie = await UsersRepository.delete(queryObject);
    return deletedMovie;
  };
}
module.exports = UsersService;
