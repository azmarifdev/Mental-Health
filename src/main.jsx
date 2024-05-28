import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <Toaster position="bottom-right" />
        <App />
    </AuthProvider>
);
