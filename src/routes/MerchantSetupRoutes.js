import { lazy } from "react"

const MerchantAccountSetup = lazy(() =>
  import("../pages/merchantAccount/onboarding/MerchantAccountSetupWithProvider")
)
const MerchantSetupPickup = lazy(() =>
  import("../pages/merchantAccount/onboarding/MerchantSetupPickupWithProvider")
)
const MerchantSetupDelivery = lazy(() =>
  import("../pages/merchantAccount/onboarding/MerchantSetupDelivery")
)
const MerchantSetupLeadTime = lazy(() =>
  import("../pages/merchantAccount/onboarding/MerchantSetupLeadTime")
)
const MerchantSetupComplete = lazy(() =>
  import("../pages/merchantAccount/onboarding/MerchantSetupFinish")
)

const CreateMealKit = lazy(() => import("../pages/MealKit/CreateMealKit"))
const MealKitSetupFinish = lazy(() => import("../pages/MealKit/MealKitSetupFinish"))

const MerchantSetupRoutes = [
  {
    path: "/account/:accountId",
    name: "Setup Account",
    // icon: DashboardIcon,
    component: MerchantAccountSetup, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/account",
    name: "Setup Account",
    // icon: DashboardIcon,
    component: MerchantAccountSetup, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/pickup/:accountId",
    name: "Pickup",
    // icon: DashboardIcon,
    component: MerchantSetupPickup, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/pickup/",
    name: "Pickup",
    // icon: DashboardIcon,
    component: MerchantSetupPickup, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/delivery/:accountId",
    name: "Delivery",
    // icon: DashboardIcon,
    component: MerchantSetupDelivery, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/delivery",
    name: "Delivery",
    // icon: DashboardIcon,
    component: MerchantSetupDelivery, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/lead-time/:accountId",
    name: "Delivery",
    // icon: DashboardIcon,
    component: MerchantSetupLeadTime, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/lead-time",
    name: "Delivery",
    // icon: DashboardIcon,
    component: MerchantSetupLeadTime, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/complete/:accountId",
    name: "Complete",
    // icon: DashboardIcon,
    component: MerchantSetupComplete, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/complete",
    name: "Complete",
    // icon: DashboardIcon,
    component: MerchantSetupComplete, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/new-recipe/complete",
    name: "New Recipe Completed",
    // icon: DashboardIcon,
    component: MealKitSetupFinish, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
  {
    path: "/new-recipe",
    name: "New Recipe",
    // icon: DashboardIcon,
    component: CreateMealKit, // WithAuth(MealPrep),
    layout: "/merchant/setup",
  },
]

export default MerchantSetupRoutes
