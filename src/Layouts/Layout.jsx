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
      url: "/radiologex",
      dropdown: [
        {
          id: 3,
          label: "Item 1",
          url: "/radiologex/item1",
        },
        {
          id: 4,
          label: "Item 2",
          url: "/radiologex/item2",
        },
      ],
    },
    {
      id: 5,
      label: "Explore",
      url: "/explore",
      dropdown: [
        {
          id: 6,
          label: "Item 1",
          url: "/explore/item1",
        },
        {
          id: 7,
          label: "Item 2",
          url: "/explore/item2",
        },
      ],
    },
    {
      id: 8,
      label: "FAQs",
      url: "/faqs",
    },
    {
      id: 9,
      label: "Contact Us",
      url: "/contact-us",
      isButton: true,
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
