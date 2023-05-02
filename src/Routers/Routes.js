import DashboardLayout from "../Layouts/DashboardLayout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
            }
        ]
    },
]);

export default router;