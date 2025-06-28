import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router