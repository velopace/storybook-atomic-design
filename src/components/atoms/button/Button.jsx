import { func, node, string } from "prop-types";

import StyledButton, { StyledLinkButton } from "./Button.styles";
import { ReactComponent as IconBag } from "../../../assets/images/icons/shopping-bag.svg";
import { ReactComponent as IconCart } from "../../../assets/images/icons/shopping-cart.svg";
import { ReactComponent as IconPlus } from "../../../assets/images/icons/plus.svg";
import { ReactComponent as IconUser } from "../../../assets/images/icons/user.svg";
import { ReactComponent as IconX } from "../../../assets/images/icons/x.svg";

const Icons = {
  bag: <IconBag />,
  cart: <IconCart />,
  plus: <IconPlus />,
  user: <IconUser />,
  x: <IconX />,
};

const Button = ({ label, href, icon, onClick, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon} />}
        {label}
      </StyledButton>
    );
  return (
    <StyledLinkButton href={href} variant={variant}>
      {icon && <ButtonIcon name={icon} />}
      {label}
    </StyledLinkButton>
  );
};

const ButtonIcon = ({ name }) => {
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[name] === undefined) return null;
  // If icon found, return the icon in a span element
  const Icon = Icons[name];
  return <span className="button__icon">{Icon}</span>;
};

Button.propTypes = {
  label: string,
  href: string,
  icon: string,
  onClick: func,
  variant: string,
};

Button.defaultProps = {
  label: "Button text",
  variant: "primary",
};

export default Button;
