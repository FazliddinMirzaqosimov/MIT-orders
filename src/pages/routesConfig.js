import { Navigate } from "react-router-dom";
import CongratsPage from "./CongratsPage/Index.jsx";
import FormPage from "./FormPage/Index.jsx";

export const routes = [
    {
        id:1,
        path:"/",
        element:<FormPage/>
    }, {
        id:2,
        path:"/congratulations",
        element:<CongratsPage/>
    },{
        id:3,
        path:"*",
        element:<Navigate to="/"/>
    }
]