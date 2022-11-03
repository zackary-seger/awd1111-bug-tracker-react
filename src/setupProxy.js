
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/", { target: "https://bug-tracker-react-zak-seger.herokuapp.com/" })
  );
};