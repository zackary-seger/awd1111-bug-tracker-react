
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/api"], { target: "https://bug-tracker-react-zak-seger.herokuapp.com/" })
  );
};