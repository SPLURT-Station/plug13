import { PrismaClient } from "@prisma/client";
import logDated from "~/server/utils/logger";
const prisma = new PrismaClient();

const TEN_HOURS = 10 * 60 * 60 * 1000;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.code || !body.key) return { "error": "Invalid request body. Please notify the developer about this" };

  const byondSecret = useRuntimeConfig().byondSecret;
  if (!body.secret || body.secret !== byondSecret) return { "error": "Invalid build secret. Please notify the developer about this." }

  const userConnection = await prisma.connectionString.findFirst({
    where: {
      value: body.code.replace("-", "").toUpperCase(),
      createdAt: { gte: new Date(Date.now() - TEN_HOURS) },
    },
    select: { owner: { select: { username: true } }, value: true }
  });
  if (!userConnection) return { "error": "Invalid connection code!" };

  logDated(`${body.key} connected to the key ${userConnection.value} of user ${userConnection.owner.username}`);

  return { "username": userConnection.owner.username };
})
