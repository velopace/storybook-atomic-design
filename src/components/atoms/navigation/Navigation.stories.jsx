import Navigation from "./Navigation";

const Template = (args) => <Navigation {...args} />;
const items = [
  { title: "Home", url: "/" },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const HorizontalNavigation = Template.bind({});
HorizontalNavigation.args = {
  direction: "horizontal",
  items,
};

export const VerticalNavigation = Template.bind({});
VerticalNavigation.args = {
  direction: "vertical",
  items,
};

export default {
  title: "Molecules/Navigation",
  component: Navigation,
  argTypes: {
    direction: { control: "radio", options: ["horizontal", "vertical"] },
  },
};
