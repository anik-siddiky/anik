import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
import ErrorPage from "../Pages/ErrorPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import ProjectPage from "../Pages/ProjectPage";

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
                element: <ProjectPage></ProjectPage>
            },
            {
                path: 'contact',
                element: <ContactPage></ContactPage>
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