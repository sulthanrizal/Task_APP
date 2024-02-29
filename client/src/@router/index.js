import Login from "../@page/login";
import Home from "../@page/home";
import Register from "../@page/register";
import Example from "../@page/example";
import TodoBox from "@page/todoBox";
import TodoAdd from "@page/todoadd";


const router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'example',
        element: <Example />
    },
    {
        path: 'todoadd',
        element: <TodoAdd/>
    },
    {
        path: 'todobox',
        element: <TodoBox />
    }

]

export default router;
