import { PrismaClient } from "../app/generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("123456", 10);
  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: { username: "admin", passwordHash },
  });
  console.log("Usuário admin criado (ou já existia).");
}

main().finally(() => prisma.$disconnect());