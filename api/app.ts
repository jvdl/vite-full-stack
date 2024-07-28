import fastify from 'fastify';

const app = async () => {
  const app = fastify();

  app.get('/api/ping', (req, reply) => {
    reply.send({ msg: 'pong' });
  });

  app.get('/api/pong', (req, reply) => {
    reply.send({ msg: 'ping' });
  });

  // app.listen({ port: process.env.APP_API_PORT });

  return app;
};

export const viteNodeApp = app();
