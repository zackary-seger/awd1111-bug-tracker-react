
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/api"], { target: "https://bug-tracker-zackary-seger.herokuapp.com/" })
  );
};