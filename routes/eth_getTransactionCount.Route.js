import { fetchTransactionCount } from "../controller/eth_getTransactionCount.js"; // Ensure the correct path

export default async function transactionRoutes(fastify, options) {
  fastify.post("/gettransactioncount", async (request, reply) => {
    return fetchTransactionCount(request, reply);
  });
}
