import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AllFoods from "../Pages/AllProduct/AllFoods";
import EditPage from "../Pages/EditPage/EditPage";
import AddProduct from "../Pages/AddProduct/AddFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/foods")
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
        loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`)
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "dashboard/all_food",
        element: <AllFoods />
      },
      {
        path: "dashboard/add_product",
        element: <AddProduct />
      }

    ]
  }
]);

export default router;