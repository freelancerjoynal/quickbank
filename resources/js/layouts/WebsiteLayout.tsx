import React, { ReactNode } from "react";
import WebsiteTopNav from "./particles/WebsiteTopNav";
import Footer from "./particles/Footer";

interface WebsiteLayoutProps {
  children: ReactNode;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <>
      <WebsiteTopNav />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
