import apiMiddleware from "./apiMiddleware";
import logMiddleware from "./logMiddleware";

const middlewares = [
  //register your middlewares here
  logMiddleware,
  apiMiddleware
];

export default middlewares;
