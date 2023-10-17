import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Update from "./components/Update/Update";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RootLayout from "./components/RootLayout/RootLayout";

// Testing message

function App() {

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
export default App;
