import Login from "../@page/login";
import Home from "../@page/home";
import Register from "../@page/register";
import Example from "../@page/example";
import TodosList from "../@page/todosList";
import TodoBox from "@page/todoBox";


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
        path: 'todoslist',
        element: <TodosList />
    },
    {
        path: 'todobox',
        element: <TodoBox />
    }

]

export default router;
