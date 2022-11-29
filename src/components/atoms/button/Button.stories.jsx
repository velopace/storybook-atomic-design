import Button from "./Button";

const buttonClicked = (e) => {
  e.preventDefault();
  alert("Hello");
};

const Template = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  label: "Button text",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: "Secondary button",
  variant: "secondary",
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  label: "Tertiary button",
  variant: "tertiary",
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: "Icon button",
  icon: "user",
};

export const FunctionButton = Template.bind({});
FunctionButton.args = {
  label: "Function button",
  onClick: buttonClicked,
};

export const LinkedButton = Template.bind({});
LinkedButton.args = {
  label: "Linked button",
  href: "/route",
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    icon: { control: "select", options: ["bag", "cart", "plus", "user", "x"] },
  },
};
