import {RouterProvider} from "react-router-dom";
import {router} from "./Router/router";

const App = () => {
    return (
        <div className="font-serif">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default App;
