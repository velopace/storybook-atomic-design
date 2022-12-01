import React from "react";

import Footer from "./footer";

const menus = [
  {
    title: "Menu 1",
    items: [{ title: "Home", url: "/" }],
  },
  {
    title: "Menu 2",
    items: [{ title: "About", url: "/" }],
  },
  {
    title: "Menu 3",
    items: [{ title: "Contact", url: "/" }],
  },
];

export const standardFooter = () => (
  <Footer menus={menus} />
);

export default {
  component: Footer,
  title: "Organisms/Footer",
};
