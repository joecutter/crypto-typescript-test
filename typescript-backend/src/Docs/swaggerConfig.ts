import swaggerJsdoc from "swagger-jsdoc";

const definition = {
  info: {
    openapi: "3.0.0",
    title: "TEST APPLICATION",
    description: "This is a test app that consumes crypto apis",
    contact: { name: "API Support", email: "cjnjenga@gmail.com" },
    version: "1.0.0",
  },
  host: `${process.env.URL}:${process.env.NODE_PORT}`,
  schemes: ["http", "https"],
  basePath: "/api/v1",
  tags: [
    {
      name: "ACCOUNT",
      description: "This should allow organization to create `ACCOUNT`.",
    },
    {
      name: "USER MANAGEMENT",
      description: "This should allow user profile management.",
    },
  ],
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
    },
  },
};

const options = {
  definition,
  apis: ["./routes/*.ts"],
};

const specs = swaggerJsdoc(options);

export default specs;
