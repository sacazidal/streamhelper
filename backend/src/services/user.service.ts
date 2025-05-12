import prisma from "../config/prisma";
import { UserCreateInput } from "../types/user.type";

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export async function createUser(data: UserCreateInput) {
  return await prisma.user.create({ data });
}
