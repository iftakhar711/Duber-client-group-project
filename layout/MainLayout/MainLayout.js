import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
