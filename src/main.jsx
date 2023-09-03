import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Testpage from "./pages/testpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "testpage",
    element: <Testpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
