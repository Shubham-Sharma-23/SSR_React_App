import React from "react";
import HomepageTemplate from "../../template/HomepageTemplate";
import { fetchPrograms } from "../../redux/actions";

const HomePage = () => <HomepageTemplate />;

const loadServerSideData = (store) => {
    return store.dispatch(fetchPrograms());
};

export default {
    component: HomePage,
    loadServerSideData,
};
