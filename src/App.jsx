import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Browse from "./components/Browse";

const appRoutes = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        children: [
          {
            path: "",
            element: <Login />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "browse",
            element: <Browse />,
          },
        ],
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={appRoutes}>
      <Body />
    </RouterProvider>
  );
}

export default App;
