import Main from "../Assets/Layouts/Main";
import DashboardMenu from "../Pages/Dashboard/DashboardMenu/DashboardMenu";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/',
        element: <DashboardMenu />
    },
]);

export default router;