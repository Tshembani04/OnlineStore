import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout  ({ children }) {
  return (
    // Wrap this in a fragment
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
