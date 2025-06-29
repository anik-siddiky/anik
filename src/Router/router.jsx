import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
import ErrorPage from "../Pages/ErrorPage";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import AboutPage from "../Pages/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <AboutPage></AboutPage>
            },
            {
                path: 'project',
                element: <Project></Project>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
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