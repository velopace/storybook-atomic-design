import Button from "./Button";
import { func, node, string } from "prop-types";

const buttonClicked = (e) => {
  e.preventDefault();
  alert("Hello");
};

export const basicButton = () => <Button>Basic button</Button>;
export const secondaryButton = () => (
  <Button variant="secondary">Secondary button</Button>
);
export const tertiaryButton = () => (
  <Button variant="tertiary">Tertiary button</Button>
);
export const iconButton = () => <Button icon="user">Icon button</Button>;
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);
export const linkedButton = () => <Button href="/route">Linked button</Button>;

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
};

export default {
  title: "Button",
  component: Button,
};
