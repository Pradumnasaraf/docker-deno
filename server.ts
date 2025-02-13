// server.ts
import { Application, Router } from "https://deno.land/x/oak@v12.0.0/mod.ts";

const app = new Application();
const router = new Router();

// Define a route that returns JSON
router.get("/", (context) => {
  context.response.body = { Status: "OK" };
  context.response.type = "application/json";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });