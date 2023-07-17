import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/users";
import Products from "./pages/products/products";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "users",
      element: <Users/>,
    },
    {
      path: "products",
      element: <Products/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
