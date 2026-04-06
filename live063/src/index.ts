import Fastify from "fastify";

const app = Fastify();

async function main() {
  try {
    const host = await app.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`Server is running at ${host}`);
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

main();
