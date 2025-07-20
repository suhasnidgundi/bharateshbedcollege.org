import { createBrowserRouter } from "react-router";
import App from "./App";
import ContactUs from "./pages/ContactUs";
import BVMandal from "./pages/about-us/BVMandal";
import AboutUs from "./pages/about-us";
import BoardOfManagement from "./pages/about-us/BoardOfManagement";
import PrincipalsMessage from "./pages/about-us/PrincipalsMessage";
import VisionMission from "./pages/about-us/visionMission";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us/bv-mandal",
    element: <BVMandal />,
  },
  {
    path:"/about-us",
    element: <AboutUs />,
  },
  {
    path:"/about-us/board-of-management",
    element: <BoardOfManagement />,
  },
  {
    path:"/about-us/principals-message",
    element: <PrincipalsMessage />,
  },
  {
    path: "/about-us/vision-mission",
    element: <VisionMission />,
  }
]);
