//the one who doing the bussines logic, like filtering or search item in datbase

const MoviesRepository = require("../repositories/moviesRepository");
const CustomAPIError = require("../utils/custom-error");

class MoviesService {
  static findMany = async (query) => {
    const { id, title, genres, year } = query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    }
    if (year) {
      queryObject.year = year;
    }
    if (title) {
      queryObject.title = { contains: title, mode: "insensitive" };
    }
    if (genres) {
      queryObject.genres = { contains: genres, mode: "insensitive" };
    }

    const data = await MoviesRepository.findMany(queryObject);
    if (data.length < 1) {
      throw new CustomAPIError("No Users found", 400);
    }
    return data;
  };

  static create = async (file, body) => {
    const { title, genres, year, photo } = body;
    const data = {};
    if (title) {
      data.title = title;
    }
    if (genres) {
      data.genres = genres;
    }
    if (year) {
      data.year = year;
    }
    if (file) {
      data.photo = `http://localhost:3000/${file.filename}`;
    }

    if (!data.title || !data.year || !data.genres) {
      throw new CustomAPIError(
        "Please provide title, year, genres and photo ",
        400
      );
    }
    return MoviesRepository.create(data);
  };

  static update = async (query, body) => {
    //check query
    const { id, title, genres, year } = query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    }
    if (year) {
      queryObject.year = year;
    }
    if (title) {
      queryObject.title = { contains: title, mode: "insensitive" };
    }
    if (genres) {
      queryObject.genres = { contains: genres, mode: "insensitive" };
    }
    const users = await MoviesRepository.findMany(queryObject);
    if (users.length > 1) {
      throw new CustomAPIError("Please give more specific details!", 400);
    }
    //check body
    const bodyObject = {};
    if (body.title) {
      bodyObject.title = body.title;
    }
    if (body.genres) {
      bodyObject.genres = body.genres;
    }
    if (body.year) {
      bodyObject.year = body.year;
    }

    if (!bodyObject.title && !bodyObject.year && !bodyObject.genres) {
      throw new CustomAPIError(
        "Please provide title, year, genres and photo ",
        400
      );
    }

    const updatedUsers = await MoviesRepository.update(queryObject, bodyObject);
    return updatedUsers;
  };

  static delete = async (query) => {
    const { id, title, genres, year } = query;
    const queryObject = {};
    if (id) {
      queryObject.id = Number(id);
    }
    if (year) {
      queryObject.year = year;
    }
    if (title) {
      queryObject.title = { contains: title, mode: "insensitive" };
    }
    if (genres) {
      queryObject.genres = { contains: genres, mode: "insensitive" };
    }

    const deletedUser = await MoviesRepository.delete(queryObject);
    return deletedUser;
  };
}
module.exports = MoviesService;
