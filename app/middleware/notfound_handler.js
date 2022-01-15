module.exports = () => {
    return async function notFoundHandler(ctx, next) {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'IS Not Found' };
        } else {
          ctx.body = '<h1>Page Is Not Found</h1>';
        }
      }
    };
  };