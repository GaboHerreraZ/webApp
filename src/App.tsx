import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { AppRouter } from "./AppRouter";

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
