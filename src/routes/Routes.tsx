import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import IndividualLayout from "../Layout/IndividualLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Form from "@/pages/Form";
import Services from "@/pages/Services";
import Dashboard from "@/pages/Dashboard";
import Clients from "@/pages/Clients";
import Appointments from "@/pages/Appointments";
import UserDashboardReportsPage from "../pages/UserDashboardReports";
import Settings from "@/pages/Settings";
import Support from "@/pages/Support";
import Therapists from "../pages/Therapists";
import Sessions from "../pages/Sessions";
import ContentManagement from "../pages/ContentManagement";
import DashboardContent from "@/components/IndividualDashboard/DashboardContent";
import Oldreport from "@/pages/Oldreport";
import PlatformSettings from "@/pages/PlatformSettings"
import SupportTickets from "@/pages/SupportTickets"
const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute allowedRoles={["user", "admin"]} />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/clients",
            element: <Clients />,
          },
          {
            path: "/appointments",
            element: <Appointments />,
          },
{ path: "/reports", element: <Oldreport /> },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/support",
            element: <Support />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/services",
            element: <Services />,
          },
          {
            path: "/form",
            element: <Form />,
          },
        ],
      },
      {
        path: "/admin",
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          { path: "", element: <AdminDashboard /> },
        ],
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: <ProtectedRoute allowedRoles={["user"]} />,
    children: [
      {
        path: "",
        element: <IndividualLayout />,
        children: [
          { index: true, element: <DashboardContent /> }, // Use the new component
          { path: "therapists", element: <Therapists /> },
          { path: "sessions", element: <Sessions /> },
          { path: "content-management", element: <ContentManagement /> },
          { path: "reports", element: <UserDashboardReportsPage /> },
          { path: "settings", element: <PlatformSettings /> },
          { path: "support", element: <SupportTickets /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;