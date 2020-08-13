import React from "react";
import HomePage from "../../pages/HomePage";

// const Routes = () => (
//     <div>
//         <Route exact path="/" component={HomePage} />
//     </div>
// );
// export default Routes;
export default [
    {
        path: "/",
        ...HomePage,
    },
];
