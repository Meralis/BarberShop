import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Update from "../Update/Update";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [{
                path: "/",
                element: <Home/>,
                index: true
            }, {
                path: "/services",
                element: <Services/>
            }, {
                path: "/update",
                element: <Update/>
            }, {
                path: "/about",
                element: <About/>
            }, {
                path: "/contact",
                element: <Contact/>
            }
            ]
        }
    ]);
    return <>
        <RouterProvider router={router}/>
    </>
}

export default Router;


