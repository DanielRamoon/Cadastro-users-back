import prisma from "../prisma/client.js";

const createUser = async (data) => {
  return prisma.user.create({ data });
};

export default { createUser };
