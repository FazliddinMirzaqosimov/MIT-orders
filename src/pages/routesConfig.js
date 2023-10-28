import { Navigate } from "react-router-dom";
import CongratsPage from "./CongratsPage";
import FormPage from "./FormPage";

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