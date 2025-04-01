import fastify from "fastify";
import autoLoad from "@fastify/autoload";
import path from "path";
import { fileURLToPath } from 'url';
import eth_getTransactionCountRoute from "./routes/eth_getTransactionCountRoute.js"

//es

const app = fastify({
    logger: true
});
app.register(eth_getTransactionCountRoute);



  
app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
console.log(`Server running @ http://localhost:${process.env.PORT || 8080}`);
