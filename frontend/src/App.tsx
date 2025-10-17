// import * as React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom"
import "./App.css";
// import TopBar from "./components/topbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";


function AppRouter() {

  const routes = useRoutes([
    {
      path: "/",
      element: <HomeSection />,
    },
    {
      path: "/about",
      element: <AboutSection />,
    },
    {
      path: "/service",
      element: <ServiceSection />
    }
  ]);

  return routes
}
export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}