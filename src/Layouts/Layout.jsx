import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./../Components/Shared/Header";
import FooterComponent from "./../Components/Shared/FooterComponent";

function Layout({ children }) {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
    },
    {
      id: 2,
      label: "Radiologex",
      url: "#",
      dropdown: [
        {
          id: 3,
          label: "Item 1",
          url: "#",
        },
        {
          id: 4,
          label: "Item 2",
          url: "#",
        },
      ],
    },
    {
      id: 5,
      label: "Explore",
      url: "#",
      dropdown: [
        {
          id: 6,
          label: "Item 1",
          url: "#",
        },
        {
          id: 7,
          label: "Item 2",
          url: "#",
        },
        {
          id: 71,
          label: "Item 3",
          url: "#",
        },
      ],
    },
    {
      id: 8,
      label: "FAQs",
      url: "#",
    },
    {
      id: 9,
      label: "Contact Us",
      url: "mailto:launch@radiologex.com",
      isButton: true,
      target: "_blank",
    },
  ];

  return (
    <>
      <Header menuItems={menuItems} />
      <main>
        {/* Add the outlet from React Router here */}
        {/* <Outlet /> */}
        {children}
      </main>
      <FooterComponent />
    </>
  );
}
export default Layout;
