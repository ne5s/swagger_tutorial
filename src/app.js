import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerOptions from "./swagger";

const app = express();
app.use(bodyParser.json());

const specs = swaggerJSDoc(SwaggerOptions);

app.use(routes.home, userRouter);

app.use(
  routes.swagger,
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

export default app;
