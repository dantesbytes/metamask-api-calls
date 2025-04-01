import fastify from "fastify";
import autoLoad from "@fastify/autoload";
import path from "path";
import { fileURLToPath } from 'url';
import transactionRoutes from "./routes/eth_getTransactionCount.Route.js"

//es

const app = fastify();
app.register(transactionRoutes);



  
app.listen({ port: process.env.PORT || 8080, host: "0.0.0.0" });
console.log(`Server running @ http://localhost:${process.env.PORT || 8080}`);
