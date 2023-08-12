const { PrismaClient } = require("@prisma/client");
const CustomAPIError = require("../utils/custom-error");

const prisma = new PrismaClient();

class UsersRepository {
  static findMany = async (queryObject) => {
    const data = await prisma.users.findMany({ where: queryObject });

    return data;
  };

  static create = async (payload) => {
    // console.log(payload);
    const newUser = await prisma.users.create({ data: payload });
    return newUser;
  };
  static update = async (query, data) => {
    const updatedUser = await prisma.users.update({
      where: query,
      data: data,
    });
    return updatedUser;
  };
  static delete = async (query) => {
    console.log(query);
    try {
      const deletedUser = await prisma.users.delete({ where: query });
      return deletedUser;
    } catch (error) {
      throw new CustomAPIError("no such users", 400);
    }
  };
}

module.exports = UsersRepository;

//routes -> controllers(take the data) -> services (olah data)-> repositories(access database)
