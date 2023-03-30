// src/index.ts
import { ApolloServer } from "apollo-server";
import { sequelize } from "./config/database";
import schema from "./graphql/schema";

const server = new ApolloServer({
  schema,
  context: () => {
    return { db: sequelize };
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database");
    return sequelize.sync();
  })
  .then(() => {
    server
      .listen()
      .then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
      })
      .catch((error) => {
        console.error("Error starting the server:", error);
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
