const { PrismaClient } = require("@prisma/client");
const CustomAPIError = require("../utils/custom-error");

const prisma = new PrismaClient();

class MoviesRepository {
  static findMany = async (queryObject) => {
    const data = await prisma.movies.findMany({ where: queryObject });

    return data;
  };

  static create = async (payload) => {
    // console.log(payload);
    const newMovies = await prisma.movies.create({ data: payload });
    // console.log(newMovies);
    return newMovies;
  };
  static update = async (query, data) => {
    const updatedMovies = await prisma.movies.update({
      where: query,
      data: data,
    });
    return updatedMovies;
  };
  static delete = async (query) => {
    console.log(query);
    try {
      const deletedMovies = await prisma.movies.delete({ where: query });
      return deletedMovies;
    } catch (error) {
      console.log(error);
      throw new CustomAPIError("No such movie!", 400);
    }
  };
}

module.exports = MoviesRepository;

//routes -> controllers(take the data) -> services (olah data)-> repositories(access database)
