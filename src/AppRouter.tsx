import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@/pages";
import { DashBoardPage } from "@/pages/DashBoardPage";
import { Layout } from "@/features/common";
import { Register } from "@/features/register/components/Register";
import { DASHBOARD_PERMISSION, ProtectedRoute } from "@/features/auth";

export const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute requiredPermissions={DASHBOARD_PERMISSION.READ}>
            <DashBoardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
