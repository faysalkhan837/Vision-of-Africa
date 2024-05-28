import { createBrowserRouter } from "react-router-dom";

import Main from "../Component/Main/Main";
import Home from "../Page/Home/Home";
import ContuctUs from "../Page/ContuctUs/ContuctUs";
import Example from "../Component/Example/Example";
import WhoWeAre from "../Page/WhoWeAre/WhoWeAre";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:'/contuctus',
                element: <ContuctUs></ContuctUs>
            },
            {
                path:'weare',
                element: <WhoWeAre></WhoWeAre>
            },
            {
                path: '/example',
                element: <Example></Example>
            }
        ]
    }
])
