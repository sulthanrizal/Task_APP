import Login from "../account/page/login";
import Home from "../account/page/home";
import Register from "../account/page/register";
import Example from "../account/page/example";


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
        path: 'todos@gmail.com'
    }

]

export default router;
