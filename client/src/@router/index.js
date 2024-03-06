import Login from "../@page/login";
import Home from "../@page/home";
import Register from "../@page/register";
import Example from "../@page/example";
import TodoBox from "@page/todoBox";
import TodoAdd from "@page/todoadd";
import TodoEdit from "@page/todoEdit";
import Profile from "@page/profile";


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
        element: <TodoAdd />
    },
    {
        path: 'todobox',
        element: <TodoBox />
    },
    {
        path: 'todoedit:id',
        element: <TodoEdit />
    }
    ,
    {
        path: 'Profile',
        element: <Profile />
    }
]

export default router;
