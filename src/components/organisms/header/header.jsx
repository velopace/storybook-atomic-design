import { useState } from "react";
import { arrayOf, shape, string } from "prop-types";

import Navigation from "../../molecules/navigation/navigation";
import StyledHeader from "./header.styles";
import Logo from "../../../assets/images/logo.png";
import Button from "../../atoms/button/button";

const Header = ({ navigation }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <StyledHeader className={isOpen ? `header--open` : `header--closed`}>
      <div className="header__navigation">
        {navigation.length > 0 &&
          navigation.map(({ items, title }) => (
            <Navigation items={items} key={`header-menu-${title}`} />
          ))}
      </div>
      <img src={Logo} alt="Celtic Elements Logo" />
      <Button onClick={toggleMenu} label={`${isOpen ? "Hide" : "Show"} menu`} />
    </StyledHeader>
  );
};

Header.propTypes = {
  navigation: arrayOf({
		items: arrayOf(
			shape({
				icon: string,
				title: string.isRequired,
				url: string.isRequired
			})
		),
		title: string
	})
};

Header.defaultProps = {
  navigation: []
};

export default Header;
