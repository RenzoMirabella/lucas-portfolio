import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  usePageMeta();

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;