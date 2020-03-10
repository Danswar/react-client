import apiMiddleware from "./apiMiddleware";
import logMiddleware from "./logMiddleware";
import authMiddleware from "./authMiddleware";

const middlewares = [
  //register your middlewares here
  authMiddleware,
  apiMiddleware,
  logMiddleware
];

export default middlewares;
