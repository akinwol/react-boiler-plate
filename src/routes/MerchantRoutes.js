import { lazy } from "react"
import { Dashboard as DashboardIcon } from "@material-ui/icons"

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"))
// const UserSettings = lazy(() => import("../pages/settings/UserSettings"))

const MerchantRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard, // WithAuth(MealPrep),
    layout: "/merchant",
  },
  // {
  //   path: "/meal-kit/details",
  //   name: "Meal Kit Details",
  //   icon: MenuBook,
  //   component: MealKitDetails, // WithAuth(MealPrep),
  //   layout: "/merchant",
  //   hiddenFromMenu: true,
  // },
]

export default MerchantRoutes
