import {RouterProvider} from "react-router-dom";
import {router} from "./Router/router";

const App = () => {
    return (
        <div className="min-h-screen text-slate-100">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
