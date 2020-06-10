import express from "express";

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({message: 'Hello world 06/2020'});
});

export default routes;