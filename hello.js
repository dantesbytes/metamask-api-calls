export default async function (fastify, opts) {

    fastify.get(
        
        '/hello',
        async function (request, reply) {
        return { message: 'Hello, World!' };
        });

}