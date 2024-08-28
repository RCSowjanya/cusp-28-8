import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import GetQuote from "./Components/GetQuote";
import JoinUs from "./Components/JoinUs";
import JoinusForm from "./Components/JoinusForm";
import LoginPage from "./DashboardPages/LoginPage";
import DashBoard from "./DashboardPages/DashBoard";
import JoinUsUploads from "./Components/JoinUsUploads";
import CustomerDetails from "./DashboardPages/CustomerDetails";
import CustomerFullDetails from "./Components/CustomerFullDetails";
import InstallerDashboard from "./InstallerDashboardsPages/InDashboard";
import InDashboard from "./InstallerDashboardsPages/InDashboard";
function App() {
  const location = useLocation();

  const isDashboardPage = () => {
    const dashboardRoutes = [
      "/dashboard",
      "/login",
      "/users",
      "/Leads",
      "/Installers",
      "/CustomerDetails",
    ];
    return dashboardRoutes.some((route) => location.pathname.startsWith(route));
  };

  const isInstallerDashboardsPages = () => {
    const installerDashboardRoutes = [
      "/indashboard",
      "/orders",
      "/quotations",
      "/proposals",
      "/profile",
      "/quotations1",
      "quotations2",
    ];
    return installerDashboardRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
  };

  const shouldShowCommonComponents =
    !isDashboardPage() && !isInstallerDashboardsPages();

  return (
    <div className="App">
      {shouldShowCommonComponents && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/joinusform" element={<JoinusForm />} />
        <Route path="/joinusuploads" element={<JoinUsUploads />} />
        <Route path="/customer" element={<CustomerFullDetails />} />
        <Route path="/indashboard" element={<InDashboard />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {shouldShowCommonComponents && <NewsLetter />}
      {shouldShowCommonComponents && <Footer />}
    </div>
  );
}

export default App;
