import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Users from "./pages/users/users";
import Products from "./pages/products/products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/users',
          element: <Users/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
