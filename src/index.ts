import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const server = express();
const port = process.env.PORT || 3030;
routes(server);

server.use(express.json(), cors());

server.listen(port, () => console.log(`Server funcinando na porta: ${port} `));
