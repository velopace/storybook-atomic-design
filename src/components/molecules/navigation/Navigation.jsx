import { arrayOf, shape, string } from "prop-types";

import StyledNavigation from "./Navigation.styles";

const Navigation = ({ direction, items }) => (
  <StyledNavigation direction={direction}>
    {items.map((item, index) => (
      <a href={item.url} key={index}>{item.title}</a>
    ))}
  </StyledNavigation>
);

Navigation.propTypes = {
  direction: string.isRequired,
  items: arrayOf(
    shape({
      icon: string,
      title: string.isRequired,
      url: string.isRequired,
    })
  ),
};

Navigation.defaultProps = {
  direction: "horizontal",
  items: [],
};

export default Navigation;
