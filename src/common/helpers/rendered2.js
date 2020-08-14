import React from "react";
import { renderToString } from "react-dom/server";
import { staticRouter, StaticRouter } from "react-router-dom";
import Routes from "../../common/routes";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { renderRoutes } from "react-router-config";

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    return `
    <html>
      <head>
      <title>XT</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.INITIAL_STATE = ${serialize(store.getState())};
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
