const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "HOMEPAGE";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "NOT FOUND";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "ABOUTPAGE";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "NOT FOUND";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return "NOT FOUND";
    },
  },
  {
    method: "GET",
    path: "/user/{username?}",
    handler: (req, h) => {
      const { username = "guest" } = req.params;
      return `welcome, ${username}`;
    },
  },
  {
    method: "GET",
    path: "/login",
    handler: (req, h) => {
      const { username, email } = req.query;
      return `username: ${username}, email: ${email}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, h) => {
      const { name } = req.params;
      const { lag } = req.query;
      return lag === "id" ? `hai, ${name}` : `hello, ${name}`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
      const { username, password } = req.payload;
      return `Welcome, ${username}`;
    },
  },
  {
    method: "POST",
    path: "/users",
    handler: (req, h) => {
      return h.response("created").code(201);
      const response = h
        .response(success)
        .type("text/plain")
        .header("X-Custom", "some-value");

      // const response = h.response(success);
      // response.type("text/plain");
      // response.header("X-Custom", "some-value");
      // return response;
    },
  },
];

export { routes };
