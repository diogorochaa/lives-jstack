import Fastify, { FastifyRequest } from "fastify";
import { prismaClient } from "./lib/prisma";

const app = Fastify();

type CreateUserBody = {
  name: string;
  email: string;
};

app.post(
  "/users",
  async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
    const { email, name } = request.body;

    const user = await prismaClient.user.create({
      data: {
        email,
        name,
      },
      select: {
        id: true,
      },
    });

    reply.send({ user });
  },
);

app.post(
  "/users/batch",
  async (
    request: FastifyRequest<{ Body: { users: CreateUserBody[] } }>,
    reply,
  ) => {
    const { users } = request.body;

    const createdUsers = await prismaClient.user.createManyAndReturn({
      data: users,
      skipDuplicates: true,
      select: {
        id: true,
        email: true,
      },
    });

    reply.send({ createdUsers });
  },
);

app.get("/users", async (request, reply) => {
  const users = await prismaClient.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      affiliatedTo: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      affiliateds: {
        select: {
          id: true,
          name: true,
          email: true,
          orders: true,
        },
      },
      profile: {
        select: {
          instagram: true,
        },
      },
    },
  });

  reply.send({ users });
});

app.get(
  "/users/:id",
  async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
    const { id } = request.params;

    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });

    reply.send({ user });
  },
);

app.get("/stats", async (request, reply) => {
  const {
    _count: { email: totalEmails, _all: totalUsers },
    _max: { age: oldestPerson },
    _min: { age: youngestPerson },
    _avg: { age: averageAge },
  } = await prismaClient.user.aggregate({
    _count: { email: true, _all: true },
    _max: { age: true },
    _min: { age: true },
    _avg: { age: true },
  });

  reply.send({
    stats: {
      totalUsers,
      totalEmails,
      oldestPerson,
      youngestPerson,
      averageAge: Math.round(averageAge ?? 0),
    },
  });
});

type UpdateUserBody = {
  name?: string;
  email?: string;
  age?: number;
  isActive?: boolean;
};

app.put(
  "/users/:id",
  async (
    request: FastifyRequest<{ Params: { id: string }; Body: UpdateUserBody }>,
    reply,
  ) => {
    const { id } = request.params;
    const { age, email, isActive, name } = request.body;

    const user = await prismaClient.user.update({
      data: {
        age,
        email,
        isActive,
        name,
      },
      where: {
        id,
      },
    });

    reply.send({ user });
  },
);

type UpsertUserBody = {
  name: string;
  email: string;
  age?: number;
  isActive?: boolean;
};

app.put(
  "/users",
  async (request: FastifyRequest<{ Body: UpsertUserBody }>, reply) => {
    const { age, email, isActive, name } = request.body;

    const user = await prismaClient.user.upsert({
      create: {
        name,
        email,
        age,
        isActive,
      },
      update: {
        name,
        email,
        age,
        isActive,
      },
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    reply.send({ user });
  },
);

app.delete(
  "/users/:id",
  async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
    const { id } = request.params;

    const user = await prismaClient.user.delete({
      where: { id },
      select: { id: true, email: true },
    });

    reply.send({ user });
  },
);

app.get("/", async (request, reply) => {
  const id = "46528c28-b2fa-4fc5-ae19-c1af16deaf6a";

  const result =
    await prismaClient.$queryRaw`SELECT * FROM users WHERE id = ${id}::uuid`;

  reply.send({ result });
});

app.post("/tx", async (request, reply) => {
  await prismaClient.$transaction(async (tx) => {
    await tx.user.create({
      data: {
        name: "Pedrinho",
        email: "pedrinho07@jstack.com.br",
      },
    });

    await tx.user.create({
      data: {
        name: "Pedrinho",
        email: "pedrinho08@jstack.com.br",
      },
    });

    const totalUsers = await tx.user.count();

    reply.send({ totalUsers });
  });
});

app.listen({ port: 3000 }).then(() => console.log("Server is running!"));
