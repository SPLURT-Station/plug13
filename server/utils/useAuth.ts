import { PrismaClient } from '@prisma/client';
import type { H3Event, EventHandlerRequest } from 'h3';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

async function getUser(id: string, tokenVersion: number) {
  const user = await prisma.user.findFirst({
    select: { id: true, username: true },
    where: { id, tokenVersion }
  });
  if (!user) throw Error("Token has expired");
  return user;
}

export default async (event: H3Event<EventHandlerRequest>) => {
  const cookies = parseCookies(event);
  if (!cookies.token) throw createError({
    statusCode: 401,
    message: "Token is missing"
  });

  const jwtSecret = useRuntimeConfig().jwtSecret;
  try {
    const verification = jwt.verify(cookies.token, jwtSecret);

    if (typeof verification === 'string') throw Error("JWT is invalid");
    if (verification.id  === undefined || verification.tokenVersion === undefined) throw Error("JWT data is invalid");

    return await getUser(verification.id, verification.tokenVersion);

  } catch (e) {
    throw createError({
      statusCode: 400,
      message: (e as Error)?.message || "Failed to verify token"
    });
  }
}
