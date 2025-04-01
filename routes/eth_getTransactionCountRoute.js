import { fetchTransactionCount, blobBaseFee } from "../controller/eth_getTransactionCount.js"; // Ensure the correct path

export default async function transactionRoutes(fastify, options) {

  fastify.post("/gettransactioncount", async (request, reply) => {
    return  fetchTransactionCount(request, reply);
  });

  fastify.get('/n', async function handler (request, reply) {
    return { hello: 'world' }
  })

  fastify.post("/blobfee", async (request, reply) => {

    return blobBaseFee(request, reply)

  })
}
