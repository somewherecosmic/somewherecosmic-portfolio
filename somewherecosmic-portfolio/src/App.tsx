import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/", element: <Header/>,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/profile", element: <Profile/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
