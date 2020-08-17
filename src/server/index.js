import "@babel/polyfill";
import express from "express";
import renderer from "../common/helpers/rendered2";
import createStore from "../redux/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "../common/routes";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    const store = createStore();
    console.log("content------------------------------------", store);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadServerSideData ? route.loadServerSideData(store) : null;
    });

    console.log("promises", promises);
    Promise.all(promises).then(() => {
        const content = renderer(req, store);
        res.send(content);
    });
});

app.listen(process.env.PORT || 9000, () => {
    console.log("started");
});
