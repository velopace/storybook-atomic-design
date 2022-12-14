import React from "react";

import Header from "./header";

const navigation = [
  {
    title: "general",
    items: [
      {
        icon: null,
        title: "Shop",
        url: "#",
      },
      {
        icon: null,
        title: "About Celtic Elements",
        url: "#",
      },
      {
        icon: null,
        title: "FAQ",
        url: "#",
      },
      {
        icon: null,
        title: "Contact",
        url: "#",
      },
    ],
  },
  {
    title: "account",
    items: [
      {
        icon: null,
        title: "Insights",
        url: "#",
      },
      {
        icon: null,
        title: "Account",
        url: "#",
      },
      {
        icon: "user",
        title: "User",
        url: "#",
      },
      {
        icon: "bag",
        title: "Cart",
        url: "#",
      },
    ],
  },
];

export const standardHeader = () => <Header navigation={navigation} />;

export default {
  component: Header,
  title: "Organisms/Header",
};
