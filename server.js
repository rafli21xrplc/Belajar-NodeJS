import hapi from "@hapi/hapi";
import { routes } from "./route.js";

const init = async () => {
  const server = hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan... ${server.info.uri}`);
};

init();
