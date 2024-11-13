import NavItem from './navitem/navitem';
import Logo from '../../components/logo';
import Socials from '../../components/socials';

import links from '../../data/links';
import { NavList, Menu } from './navbar.styled';
import { StyledNavItem } from './navitem/navitem.styled';

const NavbarDesktop = () => {
  return (
    <>
      <Logo section="desktopNav" />
      <Menu>
        <NavList>
          {Object.entries(links.sections).map(([, value], index) => (
            //Не показываем в меню раздел "Приемущества"
            <NavItem
              name={value.name} //О нас, Портфолио, Заказчикам
              link={Object.values(links.sections)[index].href}
              key={index}
            />
          ))}
          <StyledNavItem>
            <Socials />
          </StyledNavItem>
        </NavList>
      </Menu>
    </>
  );
};

export default NavbarDesktop;
